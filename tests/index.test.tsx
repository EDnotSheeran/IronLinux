import { render, screen } from '@testing-library/react';

import Page from '@pages/index';

describe('Should render the app without crashing', () => {
  it('Renders the home page with an heading module', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { name: 'ReactJS Structure' })
    ).toBeInTheDocument();
  });
});
