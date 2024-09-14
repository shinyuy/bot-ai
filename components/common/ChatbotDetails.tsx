import { useRetrieveChatbotDetailsQuery } from '../../redux/features/chatbotApiSlice';
import Spinner from './Spinner';

export default function ChabotDetails({ data_source_id, company_id }) {
    const { data: chatbotDetails, isLoading, isFetching } = useRetrieveChatbotDetailsQuery({ data_source_id, company_id });


    if (isLoading || isFetching) {
        return (
            <div className="my-8 flex justify-center">
                <Spinner lg />
            </div>
        );
    }

    return (
        <div>
            <div>Data source:{chatbotDetails?.data_source.map((d, i) => {
                return (
                    <p>{d.name}</p>
                )
            })} </div>
            <div>Data source:{chatbotDetails?.company.map((c, i) => {
                return (
                    <p>{c.name}</p>
                )
            })} </div>
        </div>
    );
}
