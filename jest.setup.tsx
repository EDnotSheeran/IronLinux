import '@testing-library/jest-dom';

// Mocks Next/Image for
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));
