import { apiSlice } from '../services/apiSlice';


const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		file: builder.mutation({
			query: ({pdfText, name} ) => {
				// console.log(pdfText.match(/.{1,500}/g))
                return ({
				url: '/data_store',
				method: 'POST',
                body: JSON.stringify({ 
					pdf_text: pdfText,
					name: name, 
            company_id: 1, 
				}),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
                    //"content-Type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
                
			})}
            ,
		}),

	}),
});

export const {
	useFileMutation,
} = authApiSlice;
