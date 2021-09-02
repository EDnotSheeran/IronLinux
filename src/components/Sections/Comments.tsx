import React from 'react';
import Carousel, { Item } from '../Carousel';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/solid';

type comment = {
  content: string;
  stars: number;
  author: {
    avatarURL: string;
    name: string;
    job: string;
  };
};

const comments: comment[] = [
  {
    content:
      'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema',
    stars: 5,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
      name: 'Yolanda Jesus',
      job: 'CEO',
    },
  },
  {
    content:
      'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema',
    stars: 2,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
      name: 'Yolanda Jesus',
      job: 'CEO',
    },
  },
  {
    content:
      'Eu amei a forma como fui tratada, e os profissionais de primeira ponta foram muito prestativos me ajudando em meu problema',
    stars: 3,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/55529750?v=4',
      name: 'Yolanda Jesus',
      job: 'CEO',
    },
  },
];

const Comments: React.FC = ({ children }) => {
  return (
    <section className="flex items-center bg-gradient py-8 mb-10">
      <button className="border-2 border-gold rounded-full p-3 mx-28">
        <ArrowLeftIcon className="w-7 text-gold" />
      </button>
      <Carousel>
        {comments.map((comment, i) => (
          <Item key={i} className="w-1/3 flex flex-col items-center">
            <img
              className="w-24 rounded-full mx-auto mb-3"
              src={comment.author.avatarURL}
              alt=""
            />
            <p className="mx-12 text-center font-rubik">{comment.content}</p>
            <p className="text-lg font-rubik font-medium pt-1">
              {comment.author.name}
            </p>
            <p className="text-sm pt-2 text-grey">{comment.author.job}</p>
            <Stars max={5} value={comment.stars} />
          </Item>
        ))}
      </Carousel>
      <button className="border-2 border-gold rounded-full p-3 mx-28">
        <ArrowRightIcon className="w-7 text-gold" />
      </button>
    </section>
  );
};

export default Comments;

type StarsProps = {
  max: number;
  value: number;
};

const Stars: React.FC<StarsProps> = ({ children, max, value }) => {
  if (value < 0)
    throw Error('Invalid number: number of stars must be between 0 and ' + max);

  const schema = '1'.repeat(value).padEnd(max, '0').split('');

  return (
    <div>
      {schema.map((value, i) => (
        <StarIcon
          key={i}
          className={'w-5 inline-block'.concat(
            value == '1' ? ' text-gold-rose' : ' text-gray-400'
          )}
        />
      ))}
    </div>
  );
};
