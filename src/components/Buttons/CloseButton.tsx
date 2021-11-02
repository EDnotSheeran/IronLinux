import React, { MouseEventHandler } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentcolor"
    strokeLinecap="round"
    {...props}
  />
);

export type CloseButtonProps = {
  close: MouseEventHandler;
  className?: string;
  width?: string;
  height?: string;
};

const CloseButton: React.FC<CloseButtonProps> = ({
  close,
  className,
  width = '23',
  height = '23',
}) => (
  <button onClick={close} className={className}>
    <svg width={width} height={height} viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </button>
);

export default CloseButton;
