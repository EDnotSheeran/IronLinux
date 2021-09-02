import React, {
  FunctionComponent,
  HTMLAttributes,
  useRef,
  WheelEventHandler,
} from 'react';

type CarouselProps = {
  className?: string;
  buttons?: {
    left: FunctionComponent<HTMLAttributes<HTMLButtonElement>>;
    right: FunctionComponent<HTMLAttributes<HTMLButtonElement>>;
  };
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  buttons,
}) => {
  const carousel = useRef(null);

  const handleCarouselWheelEvent: WheelEventHandler<HTMLDivElement> = e => {
    const width = (e.target as HTMLElement).offsetWidth;
    if (e.deltaY > 0) {
      (e.target as HTMLElement).scrollBy(width, 0);
    } else {
      (e.target as HTMLElement).scrollBy(0 - width, 0);
    }
  };

  const scrollFn = (direction: 'right' | 'left') => {
    if (!carousel.current) return;
    const e = carousel.current as unknown as HTMLElement;
    switch (direction) {
      case 'right':
        return () => {
          e.scrollBy(e.offsetWidth, 0);
        };
      case 'left':
        return () => {
          e.scrollBy(0 - e.offsetWidth, 0);
        };
    }
  };

  // Carousel with buttons
  if (buttons) {
    return (
      <div className="w-full flex items-center">
        <buttons.left onClick={scrollFn('left')} />
        <div
          ref={carousel}
          className={
            'flex overflow-x-auto scroll-snap-x-m scroll-hidden ' +
            (className || '')
          }
          onWheel={handleCarouselWheelEvent}
        >
          {children}
        </div>
        <buttons.right onClick={scrollFn('right')} />
      </div>
    );
  }
  // Carousel with no buttons
  return (
    <div className="w-full flex items-center">
      <div
        ref={carousel}
        className={
          'flex overflow-x-auto scroll-snap-x-m scroll-hidden ' +
          (className || '')
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

export const Item: React.FC<ItemProps> = ({ children, className }) => {
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
