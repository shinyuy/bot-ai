import { Separator } from "./Separator";
import clsx from "clsx";
import { Check } from "lucide-react";
import React, { Fragment } from "react";

interface StepperIndicatorProps {
    activeStep: number;
}

const StepperIndicator = ({ activeStep }: StepperIndicatorProps) => {
    return (
        <div className="flex justify-center items-center">
            {[1, 2, 3, 4].map((step) => (
                <Fragment key={step}>
                    <div
                        className={clsx(
                            "w-[40px] h-[40px] flex justify-center items-center m-[5px] border-[2px] rounded-full",
                            step < activeStep && "bg-primary text-white text-white bg-gray-800",
                            step === activeStep && "border-primary text-white bg-gray-800"
                        )}
                    >
                        {step >= activeStep ? step : <Check className="h-5 w-5 text-white bg-gray-800" />}
                    </div>
                    {step !== 5 && (
                        <Separator
                            orientation="horizontal"
                            className={clsx(
                                "w-[100px] h-[2px]",
                                step <= activeStep - 1 && "bg-primary"
                            )}
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default StepperIndicator;
