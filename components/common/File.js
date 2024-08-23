// import AddIcon from "@mui/icons-material/Add";
// import CancelIcon from "@mui/icons-material/Cancel";
// import CircularProgress from "@mui/material/CircularProgress";
import React, { Component, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
//import API from "../../pages/api/APIURL";
// import { handleLogout } from "./Header";
import axios from 'axios';
import Spinner from './Spinner';
import { useFileMutation } from '../../redux/features/fileApiSlice';
import { toast } from 'react-toastify';
import pdfToText from 'react-pdftotext';
import { UploadIcon } from '@radix-ui/react-icons';

export default function File(props) {
  const [fileState, setFileState] = useState({
    uploadedFiles: props.files,
    uploading: false,
    error: '',
    width: null,
  });
  const [file, { isLoading }] = useFileMutation();

  useEffect(() => {
    setFileState({ ...fileState, width: window.innerWidth });
  }, []);

  const API = '';

  const ext = (f) => f.split('.').pop();

  const onDrop = async (files) => {
    const pdf = files[0];

    if (pdf && ext(pdf.name) === 'pdf') {
      if (files[0].size > 5000000) {
        setFileState({ error: 'Image size must not exceed 500000 MB' });
      } else {
        setFileState({ error: '', uploading: true });

        let formData = new FormData();

        formData.append('file', files[0]);
        const pdfText = await pdfToText(pdf);

        // axios
        //   .post(`http://localhost:8000/api/file/upload`, formData, {
        //     headers: {
        //       "content-type": "multipart/form-data",
        //       //"x-access-token": "token",
        //     },
        //   })

        await file({ pdfText, name: pdf.name })
          .unwrap()
          .then(() => {
            dispatch(setAuth());
            toast.success('File upload');
          })
          .catch(() => {
            toast.error('Failed to upload file');
          });

        // await API.editBusinessFrontImage(
        //   [response.data],
        //   this.props.business.businessType,
        //   businessId,
        //   token
        // )
        //   .then(({ data }) => {
        //     let resImage = JSON.parse(data.images);
        //     localStorage.setItem(
        //       "business",
        //       JSON.stringify({ ...this.props.business, images: resImage })
        //     );
        //     this.setState(
        //       {
        //         uploading: false,
        //         uploadedFiles:
        //           //...this.state.uploadedFiles,
        //           resImage,
        //       },
        //       () => {
        //         this.props.imagesHandler(this.state.uploadedFiles);
        //       }
        //     );
        //   })
        //   .catch((error) => {
        //     if (error.response) {
        //       console.log(error.response.data);
        //       console.log(error.response.status);
        //       console.log(error.response.headers);
        //     }
        //     if (error.response?.status === 401) {
        //       handleLogout();
        //     } else {
        //       this.setState({
        //         ...this.state,
        //         error: error.response.data.message,
        //       });
        //       console.error(error.response.data.message);
        //     }
        //   });
      }
    }
  };

  const onRemove = (id) => {
    axios
      .post(
        `http://localhost:8000/api/images/removeimage?public_id=${id}`,
        {},
        //formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
            //"x-access-token": 'token',
          },
        },
      )
      .then((response) => {
        let images = this.state.uploadedFiles.filter((item) => {
          return item.public_id !== id;
        });

        this.setState(
          {
            uploadedFiles: images,
          },
          () => {
            this.props.imagesHandler(images);
          },
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        if (error.response?.status === 401) {
          handleLogout();
        } else {
          this.setState({ ...this.state, error: error.response.data.message });
          console.error(error.response.data.message);
        }
      });
  };

  const showUploadedImages = (isMobile) => {
    if (!fileState.uploading) {
      return fileState.uploadedFiles.map((item) => (
        <div
          className="dropzone_box"
          style={{ margin: '3px', width: isMobile ? '80vw' : 'auto' }}
          key={item.public_id}
          onClick={() => onRemove(item.public_id)}
        >
          <div
            className="wrap"
            style={{
              background: `url(${item.url}) no-repeat`,
              minWidth: '250px',
              width: isMobile ? '80vw' : 'auto',
              height: '250px',
              backgroundSize: 'cover',
              color: 'white',
            }}
          >
            <p>Cancel</p>
          </div>
        </div>
      ));
    }
  };

  const extractText = async (f) => {
    content = await pdfToText(f);

    return content;
  };

  const /*static*/ getDerivedStateFromProps = (props, fileState) => {
      if (props.reset) {
        return (fileState = {
          uploadedFiles: [],
        });
      }
      return null;
    };

  const isMobile = fileState.width <= 768;
  return (
    <>
      {fileState.error && (
        <p
          style={{
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {fileState.error}
        </p>
      )}
      <div
        style={{
          display: 'flex',
          padding: '20px',
          marginTop: '50px',
          height: isMobile ? '600px' : '300px',
          border: '2px dotted black',
          width: isMobile ? '90vw' : 'auto',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 10,
        }}
      >
        <section>
          <div
            className="dropzone clear"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              {showUploadedImages(isMobile)}
            </div>
            {fileState.uploading ? (
              <div
                className="dropzone_box"
                style={{
                  textAlign: 'center',
                  paddingTop: '10px',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '80vw' : 'auto',
                    height: '250px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div className="my-8 flex justify-center">
                    <Spinner lg />
                  </div>
                </div>
              </div>
            ) : null}
            {props.files.length <= 1 && (
              <Dropzone
                onDrop={(e) => onDrop(e)}
                multiple={false}
                className="dropzone_box"
                style={{
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '250px',
                  width: isMobile ? '80vw' : 'auto',
                  padding: '10px',
                }}
              >
                <UploadIcon width="40" height="40" />
                Click to upload or drag and drop
                <div className="">
                  <p className="text-xs text-gray-500">Maximum file size 500. MB</p>
                </div>
              </Dropzone>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
