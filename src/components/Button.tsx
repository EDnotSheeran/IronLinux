import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  if (typeof props.children != 'string')
    throw Error(`Expected string but got ${typeof props.children}.`);

  return (
    <button
      data-text={props.children}
      {...props}
      className={
        'button button--nina relative block text-center focus:outline-none overflow-hidden ' +
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

export default Button;
