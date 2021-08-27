import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div className="container mx-auto w-4/5">{children}</div>;
};

export default Container;
