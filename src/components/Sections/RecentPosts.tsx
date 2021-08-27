import React from 'react';
import Carousel, { Item } from '../Carousel';

const RecentPosts: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      <Carousel>
        <Item>
          <div className="h-80 bg-red-600"></div>
        </Item>
        <Item>
          <div className="h-80 bg-blue-600"></div>
        </Item>
        <Item>
          <div className="h-80 bg-green-600"></div>
        </Item>
        <Item>
          <div className="h-80 bg-yellow-600"></div>
        </Item>
      </Carousel>
    </section>
  );
};

export default RecentPosts;
