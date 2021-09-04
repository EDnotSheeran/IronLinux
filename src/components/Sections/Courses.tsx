import React from 'react';
import Carousel, { Item } from '../Carousel';
import { AnimatedButton } from '@components/Buttons';
import { Currency } from '@helpers/currency';

type Course = {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  slug: string;
};

const Courses: Course[] = [
  {
    title: 'Oracle',
    imageURL: '/oracle.svg',
    description:
      'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Python',
    imageURL: '/python.svg',
    description:
      'Fique especialista em Python com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Android',
    imageURL: '/android.svg',
    description:
      'Fique especialista em Pentest Mobile com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'CCNA Oracle',
    imageURL: '/cisco.svg',
    description:
      'Fique especialista em redes de computadores com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Oracle',
    imageURL: '/oracle.svg',
    description:
      'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Python',
    imageURL: '/python.svg',
    description:
      'Fique especialista em Python com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Android',
    imageURL: '/android.svg',
    description:
      'Fique especialista em Pentest Mobile com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'CCNA Oracle',
    imageURL: '/cisco.svg',
    description:
      'Fique especialista em redes de computadores com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto pt-10 pb-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center  py-10">
        Cursos Disponíveis
      </h1>
      <Carousel>
        {Courses.map((course, i) => {
          return (
            <Item key={i} className="w-full md:w-1/2 lg:w-1/4">
              <div className="flex flex-col justify-center items-center px-2 h-full">
                <img
                  className="w-full max-w-70"
                  src={course.imageURL}
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
                <AnimatedButton className="bg-gold font-poppins text-white text-bold rounded-md py-2 px-5 pointer-events-auto mt-3">
                  Comprar
                </AnimatedButton>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default CoursesSection;
