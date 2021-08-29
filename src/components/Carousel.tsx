import React, { useRef, WheelEventHandler } from 'react';

type CarouselProps = {
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const carousel = useRef(null);

  const handleCarouselWheelEvent: WheelEventHandler<HTMLDivElement> = e => {
    const width = (e.target as HTMLElement).offsetWidth;
    if (e.deltaY > 0) {
      (e.target as HTMLElement).scrollBy(width, 0);
    } else {
      (e.target as HTMLElement).scrollBy(0 - width, 0);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={carousel}
        className={
          'flex overflow-x-auto scroll-snap-x-m scroll-hidden ' + className
        }
        onWheel={handleCarouselWheelEvent}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;

type ItemProps = {
  className?: string;
};

const Item: React.FC<ItemProps> = ({ children, className }) => {
  return (
    <div
      className={
        'flex-none scroll-snap-align-start pointer-events-none ' + className
      }
    >
      {children}
    </div>
  );
};

export { Item };
