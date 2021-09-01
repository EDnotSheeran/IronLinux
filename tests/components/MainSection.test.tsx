import { render, screen } from '@testing-library/react';
import MainSection from '@root/src/components/Sections/MainSection';

describe('Should render the MainSection', () => {
  it('Renders the MainSection heading', () => {
    render(<MainSection />);
    expect(
      screen.getByRole('heading', {
        name: 'Quer aprender mais sobre o mundo de Linux e Segurança ?',
      })
    ).toBeInTheDocument();
  });

  it('Renders the firs button', () => {
    render(<MainSection />);
    expect(
      screen.getByRole('button', {
        name: 'Conheça nossas Consultorias',
      })
    ).toBeInTheDocument();
  });
});
