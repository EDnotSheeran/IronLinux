import React from 'react';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export type SpinnerProps = {
  loading?: boolean;
  color?: string;
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = ({
  color = '#1e293b',
  loading = true,
  size = 20,
}) => {
  return <BeatLoader color={color} loading={true} css={override} size={size} />;
};

export default Spinner;
