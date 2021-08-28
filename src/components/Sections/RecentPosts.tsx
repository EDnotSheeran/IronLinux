import React, { useState } from 'react';
import Carousel, { Item } from '@components/Carousel';

type Post = {
  name: string;
  author: string;
  publishedAt: string;
  url: string;
};

const Posts: Post[] = [
  {
    name: 'Aumentando a segurança de seu servidor',
    author: 'G. Viana',
    publishedAt: '03 Junho 2021',
    url: '#',
  },
  {
    name: 'Primeiros passos com Linux',
    author: 'V. Souza',
    publishedAt: '12 Abril 2021',
    url: '#',
  },
  {
    name: 'Como agendar Cronjobs no Linux',
    author: 'L. Andrade',
    publishedAt: '03 Março 2021',
    url: '#',
  },
];

const RecentPosts: React.FC = ({ children }) => {
  const PostsGroup = Posts.splice(3);

  console.log(PostsGroup);

  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-20">
      <h3 className="text-4xl font-bold text-center text-grey-500 mb-8">
        Últimos posts do blog:
      </h3>
      <Carousel>
        <Item>
          <div className="flex gap-10">
            <div className="max-w-sm rounded-md">
              <img className="w-full mb-7" src="/posts/post1.svg" alt="" />
              <a
                href="#"
                className="block font-bold text-3xl break-words px-4 text-center text-grey-500 hover:text-gold mb-3 pointer-events-auto"
              >
                Aumentando a segurança de seu servidor
              </a>
              <p className="text-center text-grey-300 text-base">
                By <strong>G. Viana</strong> | 03 Junho 2021
              </p>
            </div>
            <div className="max-w-sm rounded-md">
              <img className="w-full mb-7" src="/posts/post2.svg" alt="" />
              <a
                href="#"
                className="block font-bold text-3xl break-words px-4 text-center text-grey-500 hover:text-gold mb-3 pointer-events-auto"
              >
                Primeiros passos com Linux
              </a>
              <p className="text-center text-grey-300 text-base">
                By <strong>V. Souza</strong> | 12 Abril 2021
              </p>
            </div>
            <div className="max-w-sm rounded-md overflow-hidden">
              <img className="w-full mb-7" src="/posts/post3.svg" alt="" />
              <a
                href="#"
                className="block font-bold text-3xl break-words px-4 text-center text-grey-500 hover:text-gold mb-3 pointer-events-auto"
              >
                Como agendar Cronjobs no Linux
              </a>
              <p className="text-center text-grey-300 text-base">
                By <strong>L. Andrade</strong> | 03 Março 2021
              </p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="h-80 bg-blue-600"></div>
        </Item>
        <Item>
          <div className="h-80 bg-green-600"></div>
        </Item>
        <Item>
          <div className="h-80 bg-yellow-600"></div>
        </Item>
      </Carousel>
    </section>
  );
};

export default RecentPosts;
