import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div className="container mx-auto px-20">{children}</div>;
};

export default Container;
