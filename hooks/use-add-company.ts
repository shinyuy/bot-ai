import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useCompanyMutation } from '../redux/features/companyApiSlice';
import { toast } from 'react-toastify';

export default function useAddCompany() {
	const router = useRouter();
	const [addCompany, { isLoading }] = useCompanyMutation();

	const [formData, setFormData] = useState({
		name: '',
		website: '',
	});

	const { name, website} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		addCompany({ name, website})
			.unwrap()
			.then(() => {
				toast.success('Company added!');
				// router.push('/auth/login');
			})
			.catch(() => {
				toast.error('Failed to add company');
			});
	};

	return {
		name,
		website,
		isLoading,
		onChange,
		onSubmit,
	};
}
