type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
};

type CarouselProps = {
  className?: string;
  buttons?: boolean;
};

type ItemProps = {
  className?: string;
};

type StarsProps = {
  max: number;
  value: number;
};
