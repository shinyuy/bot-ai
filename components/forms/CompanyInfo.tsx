
import data from '../../utils/countries.json';
import { useAddCompany } from '../../hooks';
import { Form } from '../forms';

const CompanyInfo = () => {
    const { name, website, phone, industry, country, isLoading, onChange, onSubmit } = useAddCompany();


    const config = [
        {
            labelText: 'Company name',
            labelId: 'name',
            type: 'text',
            value: name,
            required: true,
        },
        {
            labelText: 'Website',
            labelId: 'website',
            type: 'text',
            value: website,
            required: true,
        },
        {
            labelText: 'Phone number',
            labelId: 'phone',
            type: 'text',
            value: phone,
            required: true,
        },
        {
            labelText: 'Industry',
            labelId: 'industry',
            type: 'text',
            value: industry,
            required: true,
        },
        {
            labelText: 'Country',
            labelId: 'country',
            type: 'text',
            value: country,
            required: true,
        },

    ];


    return (
        <div className="flex min-h-80 w-full flex-col items-center">
            <h4 className="stepper_step_heading my-8">Company Information</h4>
            <div className="w-1/2">
                <Form
                    config={config}
                    isLoading={isLoading}
                    btnText="Submit & Continue"
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};

export default CompanyInfo;