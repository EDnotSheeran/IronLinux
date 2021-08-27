import React, { ButtonHTMLAttributes } from 'react';

const GoldButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  if (typeof props.children != 'string')
    throw Error(`Expected string but got ${typeof props.children}.`);

  return (
    <button
      {...props}
      className={
        'button button--nina relative py-2 text-white block text-center focus:outline-none tracking-widest overflow-hidden bg-gold w-60 font-semibold font-poppins rounded-md ml-10 xl:ml-24 ' +
        props.className
      }
    >
      {props.children.split('').map((letter, i) => (
        <span
          className="align-middle"
          style={{
            marginLeft: letter == ' ' ? '4px' : undefined,
          }}
          key={i}
        >
          {letter}
        </span>
      ))}
    </button>
  );
};

export default GoldButton;
