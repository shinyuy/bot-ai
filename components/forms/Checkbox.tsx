import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const CheckBox = ({ label, value, checked, check }) => {

    return (
        <div className="flex items-center">
            <Checkbox.Root
                className="hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white text-black shadow-[0_2px_10px] outline-none"
                defaultChecked
                id="c1"
                onClick={check}
            >
                <Checkbox.Indicator className="text-black">
                    {checked === value && <CheckIcon className="" />}
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="pl-[15px] text-[15px] leading-none text-black" htmlFor="c1">
                {label}
            </label>
        </div>
    );
};

export default CheckBox;