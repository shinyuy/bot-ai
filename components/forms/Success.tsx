
const Success = ({ cdn }) => {

    return (
        <div className="flex min-h-screen w-full flex-col items-center">
            <h4 className="stepper_step_heading my-4">Success</h4>
            <div className="flex h-[800px] w-full  justify-evenly">
                <div className="flex w-1/2 flex-col">
                    <span className="text=sm text-gray-500">
                        Copy the following link and script tags and add to the head of your main index.html file
                    </span>

                    <span className="my-8 h-32 w-full rounded border-2 text-black">
                        {` <iframe id='chatbot-ui' src=${cdn}>
                       </iframe>`}
                    </span>


                </div>
                <div className="w-1/2">

                    <iframe src="https://f005.backblazeb2.com/file/contexx/index.html"
                        width="100%" height="100%"></iframe>
                </div>
            </div>


        </div>
    );
};

export default Success;