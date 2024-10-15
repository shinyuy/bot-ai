
const Success = () => {

    return (
        <div className="flex min-h-screen w-full flex-col items-center">
            <h4 className="stepper_step_heading my-4">Success</h4>
            <div className="flex h-[800px] w-full  justify-evenly">
                <div className="flex w-1/2 flex-col">
                    <span className="text=sm text-gray-500">
                        Copy the following link and script tags and add to the head of your main index.html file
                    </span>

                    <span className="my-8 h-32 w-full rounded border-2 text-black">
                        {`<link rel="stylesheet" href="https://bot-client-2b4.pages.dev/style.css" />`}
                        <br />
                        {`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />`}
                        <br />
                        {`<script src="https://bot-client-2b4.pages.dev/script.js" defer></script>`}
                    </span>

                    <span className="text=sm text-gray-500">
                        Copy the following script tag and add just above the closing body tag of your index.html
                        file
                    </span>
                    <span className="my-8 h-32 w-full rounded border-2 text-black">
                        {`<script src="https://bot-client-2b4.pages.dev/ui.js"></script>`}
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