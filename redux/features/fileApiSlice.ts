import { apiSlice } from '../services/apiSlice';

const fileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    file: builder.mutation({
      query: ({ pdfText, name, website, id }) => {
        return {
          url: '/data_store',
          method: 'POST',
          body: JSON.stringify({
            pdf_text: pdfText,
            name: name,
            company_website: website,
            // id: id
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //"content-Type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }; 
      },
    }),
    fileUpload: builder.mutation({
      query: ({ formData}) => {
      
        return {
          url: '/logo/upload',
          method: 'POST',
          body: formData,
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
          //   //"content-Type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
        }; 
      },
    }),
  }),
});

export const { useFileMutation, useFileUploadMutation } = fileApiSlice;
