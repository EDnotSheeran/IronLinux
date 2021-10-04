import { NextApiHandler } from 'next';

export const recentPosts = [
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL: '/img/posts/post1.svg',
    author: 'G. Viana',
    publishedAt: '03 Junho 2021',
    URL: '#',
  },
  {
    title: 'Primeiros passos com Linux',
    imageURL: '/img/posts/post2.svg',
    author: 'V. Souza',
    publishedAt: '12 Abril 2021',
    URL: '#',
  },
  {
    title: 'Como agendar Cronjobs no Linux',
    imageURL: '/img/posts/post3.svg',
    author: 'L. Andrade',
    publishedAt: '03 Março 2021',
    URL: '#',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL: '/img/posts/post1.svg',
    author: 'G. Viana',
    publishedAt: '03 Junho 2021',
    URL: '#',
  },
  {
    title: 'Primeiros passos com Linux',
    imageURL: '/img/posts/post2.svg',
    author: 'V. Souza',
    publishedAt: '12 Abril 2021',
    URL: '#',
  },
  {
    title: 'Como agendar Cronjobs no Linux',
    imageURL: '/img/posts/post3.svg',
    author: 'L. Andrade',
    publishedAt: '03 Março 2021',
    URL: '#',
  },
] as Post[];

const PostsRoute: NextApiHandler = async (req, res) => {
  return res.json(recentPosts);
};

export default PostsRoute;
