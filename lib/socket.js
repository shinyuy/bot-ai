// lib/socket.js

import { io } from 'socket.io-client';

const socket = io('ws://localhost:8000/ws/calls/', {
  path: '/ws/calls/',
  transports: ['websocket'],
  reconnection: true,
});

export default socket;
