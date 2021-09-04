import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '@components/Container';
import { FaShoppingCart } from 'react-icons/fa';
const Home: React.FC = () => {
  const router = useRouter();
  const top10StudentsList = [
    {
      imageUrl: '../../../public/students/people.jpg',
      alt: 'Estudando do curso de tecnologia',
    },
    {
      imageUrl: '../../../public/students/people.jpg',
      alt: 'Estudando do curso de tecnologia',
    },
    {
      imageUrl: '../../../public/students/people.jpg',
      alt: 'Estudando do curso de tecnologia',
    },
    {
      imageUrl: '../../../public/students/people.jpg',
      alt: 'Estudando do curso de tecnologia',
    },
    {
      imageUrl: '../../../public/students/people.jpg',
      alt: 'Estudando do curso de tecnologia',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <header className="h-56 max-h-56 bg-oval rotate-180">
        <div className="rotate-180  h-full">
          <Container>
            <h1 className="py-20 font-semibold text-5xl font-poppins">
              CCNA Cisco
            </h1>
          </Container>
        </div>
      </header>
      <Container>
        <section id="month_students" className="flex flex-col">
          <h1 className="text-xl font-semibold">Estudando esse mês</h1>
          <div className="flex flex-row -ml-1">
            {top10StudentsList.map((student, index) => {
              return (
                <div key={index} className="-mr-5">
                  <Image
                    width={60}
                    height={60}
                    src="/students/people.jpg"
                    alt={student.alt}
                    className="rounded-full"
                  />
                </div>
              );
            })}
          </div>
          <p className="text-base">E mais de 2000 alunos(as)</p>
        </section>
        <div className="flex">
          <section className="bg-yellow-300 w-2/3 h-screen">
            <h1 className="text-xl font-semibold">Resumo</h1>
            <p>
              Python é uma linguagem ultra moderna, utilizada por grandes
              empresas como Google, YouTube, Industrial Light & Magic, Globo e
              muitas outras. Fácil de aprender, com código limpo e organizado,
              Python vem ganhando cada vez mais espaço, e chegou a sua hora de
              aprender. Curso criado pelo Prof. Gustavo Guanabara com uma
              temática divertida de vídeo-game para motivar seus alunos, é
              dividido em mundos para facilitar o estudo.
              <br />O primeiro mundo foi pensando de forma a apresentar a
              linguagem ao aluno, o professor irá introduzir a linguagem, seus
              conceitos, montar o primeiro programa e ensinar alguns recursos
              básicos.
            </p>
          </section>
          <section className="bg-red-600 w-1/3">
            <div
              className="w-96
              absolute
                  bg-white
                shadow-md
                drop-shadow-xl
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
                <h2 className="text-2xl font-semibold mt-2">
                  Preço: R$ 250,00
                </h2>
                <div className="flex flex-col text-center items-center">
                  <button className="button flex justify-center items-center drop-shadow-lg mt-2 text-xs md:text-sm lg:text-base text-white text-center focus:outline-none tracking-widest bg-gold font-semibold font-poppins rounded-sm">
                    <i className="h-full p-1">
                      <FaShoppingCart size={20} />
                    </i>
                    <p className="h-full p-2">Comprar</p>
                  </button>

                  <h1 className="text-lg font-semibold">Phyton</h1>
                  <span className="text-xs text-indigo-300 mt-0 ">
                    Segurança
                  </span>
                </div>
                <p className="text-xs md:text-sm lg:text-base w-4/5 mt-2">
                  Fique especialista em banco de dados com os melhores
                  profissionais do mercado
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>

      <Container>
        <h1>Você está vendo o curso do ID: {router.query.id} </h1>
      </Container>
    </Layout>
  );
};

export default Home;
