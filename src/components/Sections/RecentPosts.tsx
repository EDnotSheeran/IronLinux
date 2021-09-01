import React, { useState } from 'react';
import Carousel, { Item } from '@components/Carousel';

type Post = {
  title: string;
  imageURL: string;
  author: string;
  publishedAt: string;
  URL: string;
};

const Posts: Post[] = [
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL: '/posts/post1.svg',
    author: 'G. Viana',
    publishedAt: '03 Junho 2021',
    URL: '#',
  },
  {
    title: 'Primeiros passos com Linux',
    imageURL: '/posts/post2.svg',
    author: 'V. Souza',
    publishedAt: '12 Abril 2021',
    URL: '#',
  },
  {
    title: 'Como agendar Cronjobs no Linux',
    imageURL: '/posts/post3.svg',
    author: 'L. Andrade',
    publishedAt: '03 Março 2021',
    URL: '#',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL: '/posts/post1.svg',
    author: 'G. Viana',
    publishedAt: '03 Junho 2021',
    URL: '#',
  },
  {
    title: 'Primeiros passos com Linux',
    imageURL: '/posts/post2.svg',
    author: 'V. Souza',
    publishedAt: '12 Abril 2021',
    URL: '#',
  },
  {
    title: 'Como agendar Cronjobs no Linux',
    imageURL: '/posts/post3.svg',
    author: 'L. Andrade',
    publishedAt: '03 Março 2021',
    URL: '#',
  },
];

const RecentPosts: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-20">
      <h3 className="text-4xl font-bold text-center text-grey-500 mb-8">
        Últimos posts do blog:
      </h3>
      <Carousel>
        {Posts.map((post, i) => (
          <Item key={i} className="w-full sm:w-1/2 lg:w-1/3 sm:px-5 ml-px">
            <div className="max-w-sm rounded-md overflow-hidden mx-auto">
              <img className="w-full mb-7" src={post.imageURL} alt="" />
              <a
                href={post.URL}
                className="block font-bold text-3xl break-words px-4 text-center text-grey-500 hover:text-gold mb-3 pointer-events-auto"
              >
                {post.title}
              </a>
              <p className="text-center text-grey-300 text-base">
                By <strong>{post.author}</strong> | {post.publishedAt}
              </p>
            </div>
          </Item>
        ))}
      </Carousel>
    </section>
  );
};

export default RecentPosts;
