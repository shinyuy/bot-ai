import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const CheckBox = ({ label, value }) => {
  const [checked, setChecked] = React.useState(value);

  return (
    <div className="flex items-center">
      <Checkbox.Root
        className="text-black hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none "
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="text-black">
          {checked !== true && <CheckIcon className='' />}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-[15px] text-[15px] text-black leading-none" htmlFor="c1">
        {label}
      </label>
    </div>
  )
}

export default CheckBox;
