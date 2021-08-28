import React, { useRef, WheelEventHandler } from 'react';

const Carousel: React.FC = ({ children }) => {
  const carousel = useRef(null);

  const handleCarouselWheelEvent: WheelEventHandler<HTMLDivElement> = e => {
    const width = (e.target as HTMLElement).offsetWidth;
    if (e.deltaY > 0) {
      (e.target as HTMLElement).scrollBy(300, 0);
    } else {
      (e.target as HTMLElement).scrollBy(-300, 0);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={carousel}
        className="flex overflow-x-auto scroll-snap-x-m scroll-hidden"
        onWheel={handleCarouselWheelEvent}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;

const Item: React.FC = ({ children }) => {
  return (
    <div className="w-full flex-none scroll-snap-align-start pointer-events-none">
      {children}
    </div>
  );
};

export { Item };
