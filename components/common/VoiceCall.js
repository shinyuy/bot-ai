import { useEffect, useRef, useState } from 'react';
import socket from '../../lib/socket';

export default function VoiceCall() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [localStream, setLocalStream] = useState(null);
  const peerConnection = useRef(null);
  let mediaRecorder;

  const servers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }; // STUN server to facilitate NAT traversal

  useEffect(() => {
    console.log(socket);
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('offer', async (offer) => {
      await handleReceiveOffer(offer);
    });

    socket.on('answer', async (answer) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('ice-candidate', async (candidate) => {
      if (candidate) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });
    socket.on('call-ended', () => {
      console.log('Connected to WebSocket ended');
    });

    socket.on('connect_error', (err) => {
      // the reason of the error, for example "xhr poll error"
      console.log(err.message);
      console.log(err);

      // some additional description, for example the status code of the initial HTTP response
      console.log(err.description);

      // some additional context, for example the XMLHttpRequest object
      console.log(err.context);
    });

    return () => {
      socket.off('connect');
      socket.off('offer');
      socket.off('answer');
      socket.off('ice-candidate');
      socket.off('call-ended');
    };
  }, []);

  // Handle incoming audio from the backend (response)
  useEffect(() => {
    socket.on('receive-audio', (data) => {
      const audio = new Audio(`data:audio/webm;base64,${data.audio}`);
      audio.play();
      setAudioURL(`data:audio/webm;base64,${data.audio}`);
    });

    return () => socket.off('receive-audio');
  }, []);

  // Function to start a call
  const startCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    setLocalStream(stream);

    peerConnection.current = new RTCPeerConnection(servers);
    peerConnection.current.addTrack(stream.getTracks()[0], stream); // Add audio track to peer connection

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', event.candidate);
      }
    };

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    // Send offer to the backend via WebSocket
    socket.emit('offer', offer);
    setIsCalling(true);
  };

  // Handle incoming offer
  const handleReceiveOffer = async (offer) => {
    peerConnection.current = new RTCPeerConnection(servers);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    setLocalStream(stream);
    peerConnection.current.addTrack(stream.getTracks()[0], stream);

    await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.current.createAnswer();
    await peerConnection.current.setLocalDescription(answer);

    // Send the answer back to the backend
    socket.emit('answer', answer);

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', event.candidate);
      }
    };
  };

  // Function to end the call
  const endCall = () => {
    // Stop the local media stream
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }

    // Close the peer connection
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }

    // Notify the other peer via WebSocket
    socket.emit('end-call');

    setIsCalling(false);
  };

  // Function to handle audio recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      const audioChunks = [];
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        sendAudioToBackend(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone: ', err);
    }
  };

  // Stop recording and send data to backend
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  // Send audio blob to backend using WebSocket
  const sendAudioToBackend = (audioBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = () => {
      const base64Audio = reader.result.split(',')[1];
      socket.emit('send-audio', { audio: base64Audio });
    };
  };

  return (
    <div>
      <h3>AI Chatbot Voice Call</h3>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {/* Play the audio response */}
      {audioURL && <audio controls src={audioURL} />}

      <h3>AI Chatbot Voice Call</h3>
      <button onClick={startCall} disabled={isCalling}>
        {isCalling ? 'In Call...' : 'Start Call'}
      </button>
      <br />
      <button onClick={endCall} disabled={isCalling}>
        Stop Call
      </button>
    </div>
  );
}
