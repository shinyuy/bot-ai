'use client';

import { useRetrieveUserQuery } from '../../redux/features/authApiSlice';
import { List, Spinner } from '../../components/common';
import { useEffect } from 'react';
import { useCompaniesMutation } from '../../redux/features/companyApiSlice';

export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
	const [companies, { }] = useCompaniesMutation();


	useEffect(() => {

		companies({})
			.unwrap()
			.then(({ d }) => {
				console.log(d)
				// dispatch(setAuth());
				// toast.success("File upload");
			})
			.catch(() => {
				// toast.error("Failed to upload file");
			});
	}, [])

	if (isLoading || isFetching) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	return (
		<section>
			<div>
				<button className='bg-black text-white px-8 py-4 rounded'>Create a Chatbot</button>
				<h2 className='text-black'>Your Companies</h2>
				<p></p>
			</div>
		</section>
	);
}
