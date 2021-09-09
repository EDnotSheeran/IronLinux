import { NextApiHandler } from 'next';

const CommentsRoute: NextApiHandler = (req, res) => {
  return res.json([
    {
      content:
        'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema.',
      stars: 5,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'Yolanda Jesus',
        job: 'CEO',
      },
    },
    {
      content:
        'Os cursos são conteúdo de primeira, ajudaram meus colaboradores a alcançar um novo level de conhecimento.',
      stars: 2,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'John Silva',
        job: 'CEO',
      },
    },
    {
      content:
        'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema.',
      stars: 3,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'Yolanda Jesus',
        job: 'CEO',
      },
    },
    {
      content:
        'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema.',
      stars: 3,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'Yolanda Jesus',
        job: 'CEO',
      },
    },
    {
      content:
        'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema.',
      stars: 3,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'Yolanda Jesus',
        job: 'CEO',
      },
    },
    {
      content:
        'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema.',
      stars: 3,
      author: {
        avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
        name: 'Yolanda Jesus',
        job: 'CEO',
      },
    },
  ] as PostComment[]);
};

export default CommentsRoute;
