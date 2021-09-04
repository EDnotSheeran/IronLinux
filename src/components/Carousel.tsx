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
      {buttons && <buttons.left onClick={scrollLeft} />}
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
      {buttons && <buttons.right onClick={scrollRight} />}
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
