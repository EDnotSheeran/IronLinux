import { render, screen } from '@testing-library/react';
import Home from '@pages/index';
import { comments } from '@pages/api/comments';
import { courses } from '@pages/api/courses';
import { recentPosts } from '@pages/api/posts';
import { specialities } from '@pages/api/specialities';

describe('Should render the MainSection', () => {
  it('Renders the MainSection heading', () => {
    render(
      <Home
        comments={comments}
        recentPosts={recentPosts}
        courses={courses}
        specialities={specialities}
        sections={{
          main: {
            heading: {
              value: 'Quer aprender mais sobre o mundo de Linux e Segurança ?',
              highlight: ['Linux', 'Segurança'],
            },
            paragraph:
              'IronLinux presta serviços de treinamento e consultoria nas principais áreas de segurança e sistemas operacionais. Descubra mais entrando em contato conosco.',
            imageURL: '/people-studying-on-pc.svg',
          },
        }}
      />
    );
    expect(
      screen.getByRole('heading', {
        name: /Quer aprender mais sobre o mundo de Linux e Segurança/,
      })
    ).toBeInTheDocument();
  });
});
