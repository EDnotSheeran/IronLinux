import React, { useRef, WheelEventHandler } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { HTMLAttributes } from 'react';

const Carousel: React.FC<CarouselProps> & {
  Item: React.FC<ItemProps>;
  RightButton: React.FC<HTMLAttributes<HTMLButtonElement>>;
  LeftButton: React.FC<HTMLAttributes<HTMLButtonElement>>;
} = ({ children, className, buttons = false }) => {
  const carousel = useRef<HTMLDivElement>(null);

  const handleCarouselWheelEvent: WheelEventHandler<HTMLDivElement> = e => {
    const width = (e.target as HTMLElement).offsetWidth;
    if (e.deltaY > 0) {
      (e.target as HTMLElement).scrollBy(width, 0);
    } else {
      (e.target as HTMLElement).scrollBy(0 - width, 0);
    }
  };

  const scrollRight = () => {
    const e = carousel.current as unknown as HTMLElement;
    e.scrollBy(e.offsetWidth, 0);
  };

  const scrollLeft = () => {
    const e = carousel.current as unknown as HTMLElement;
    e.scrollBy(0 - e.offsetWidth, 0);
  };

  return (
    <div className="w-full flex items-center">
      {buttons && <Carousel.LeftButton onClick={scrollLeft} />}
      <div
        ref={carousel}
        className={
          'w-full flex overflow-x-auto scroll-snap-x-m scroll-hidden ' +
          (className || '')
        }
        onWheel={handleCarouselWheelEvent}
      >
        {children}
      </div>
      {buttons && <Carousel.RightButton onClick={scrollRight} />}
    </div>
  );
};

Carousel.Item = function Item({ children, className }) {
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

Carousel.RightButton = function RightButton(props) {
  return (
    <button {...props} className="border-2 border-gold rounded-full p-3 m-10">
      <ArrowRightIcon className="w-7 text-gold" />
    </button>
  );
};

Carousel.LeftButton = function LeftButton(props) {
  return (
    <button {...props} className="border-2 border-gold rounded-full p-3 m-10">
      <ArrowLeftIcon className="w-7 text-gold" />
    </button>
  );
};

export default Carousel;
