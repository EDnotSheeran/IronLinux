import React from 'react';
import Carousel, { Item } from '../Carousel';
import Container from '../Container';
const Courses = [
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
  {
    title: 'Aumentando a segurança de seu servidor',
    imageURL:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    author: 'G. Viana',
    text: 'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: '250,00',
  },
];
const CoursesSection: React.FC = () => {
  return (
    <Container>
      <section className="flex flex-col font-poppins py-10 ">
        <div className="flex justify-center items-center flex-row font-poppins">
          <h1 className="text-2xl md:text-3xl font-bold font-poppins text-center">
            Cursos Disponíveis
          </h1>
        </div>
        <div className="flex py-10 flex-row font-poppins ">
          <Carousel className="gap-2 md:gap-8 lg:gap-4 md:px-7 py-10">
            {Courses.map((course, index) => {
              return (
                <Item
                  key={index}
                  className="w-full
                  pb-5
                  md:w-1/2
                  lg:w-1/4
                  bg-white
                shadow-md
               rounded-md
                flex flex-col
                items-center
                overflow-hidden"
                >
                  <div className="flex flex-col text-center justify-center items-center">
                    <img
                      src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                      alt="image"
                    />
                    <div className="flex flex-col justify-start items-baseline text-center">
                      <h1 className="text-lg font-semibold">Phyton</h1>
                      <span className="text-xs text-indigo-300 mt-0 ">
                        Segurança
                      </span>
                    </div>
                    <p className="text-xs md:text-sm lg:text-base w-4/5 mt-2">
                      Fique especialista em banco de dados com os melhores
                      profissionais do mercado
                    </p>
                    <h2 className="text-base font-semibold mt-2">R$ 250,00</h2>
                    <button className="button py-2 mt-2 text-xs md:text-sm lg:text-base text-white block text-center focus:outline-none tracking-widest overflow-hidden bg-gold font-semibold font-poppins rounded-md">
                      Comprar
                    </button>
                  </div>
                </Item>
              );
            })}
          </Carousel>
        </div>{' '}
      </section>
    </Container>
  );
};

export default CoursesSection;
