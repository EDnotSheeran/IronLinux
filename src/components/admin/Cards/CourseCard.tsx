import { Currency } from '@libs/utils';
import Link from 'next/link';
import React from 'react';
// import api from '@services/axios';
import { HTMLProps } from 'react-transition-group/node_modules/@types/react';

type Props = HTMLProps<HTMLDivElement> & {
  course: Course;
  innerRef: React.Ref<HTMLDivElement>;
};

const CardCourse: React.FC<Props> = ({ course, innerRef, ...props }) => {
  return (
    <div
      className="w-full max-w-80 md:w-1/2 lg:w-1/4 mb-10"
      ref={innerRef}
      {...props}
    >
      <div className="flex flex-col justify-center items-center mx-2 pb-6 h-full bx-shaddow rounded-md bg-white">
        <img
          className="w-full h-52 object-cover"
          src={`${course.imageURL}`}
          alt="image"
        />
        <h3 className="text-lg font-semibold text-center my-5 ">
          {course.title}
        </h3>
        <p className="font-medium text-center text-brown leading-6 mx-5 max-w-56 mb-2">
          {course.description}
        </p>
        <h2 className="text-center text-brown font-bold mt-auto">
          {Currency(course.price, 'pt-BR', 'BRL')}
        </h2>
        <Link href={`/courses/${course.slug}`}>
          <a className="bg-gold hover:bg-gold-dark font-poppins text-white text-bold rounded-md py-2 px-5 pointer-events-auto mt-3">
            Comprar
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardCourse;
