import React from 'react';

const Section: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl container mx-auto pb-10">
      {children}
    </section>
  );
};

export default Section;
