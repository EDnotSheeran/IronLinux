import React, { ButtonHTMLAttributes } from 'react';

const GoldButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <button {...props} className={'button--glass ' + props.className}>
      <span>{props.children}</span>
    </button>
  );
};

export default GoldButton;
