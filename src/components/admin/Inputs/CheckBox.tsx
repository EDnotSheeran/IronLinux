import React, { useState } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<Props> = ({ checked, ...props }) => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <input
      type="checkbox"
      className="px-3 py-3 my-2 mx-2 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring focus:shadow-none transition-all duration-150"
      onChange={e => setChecked(e.target.checked)}
      checked={isChecked}
      {...props}
    />
  );
};

export default CheckBox;
