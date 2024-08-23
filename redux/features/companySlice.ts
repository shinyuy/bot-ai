import { createSlice } from '@reduxjs/toolkit';

interface CompanyState {
    company: {},
	isLoading: boolean;
}

const initialState = {
    company: {},
	isLoading: true,
} as CompanyState;

const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		company: state => {
			state.company = {};
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { company, finishInitialLoad } = companySlice.actions;
export default companySlice.reducer;
