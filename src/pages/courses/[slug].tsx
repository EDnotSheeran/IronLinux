import React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import Link from 'next/link';

type CourseProps = {
  top10StudentsList: {
    imageUrl: string;
    alt: string;
  }[];
};

const Course: React.FC<CourseProps> = ({ top10StudentsList }) => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <div className="container px-0 mx-auto flex mb-10">
        <div className="w-full">
          <h1 className="font-semibold text-7xl">CCNA Cisco</h1>
          <div>
            <h3 className="font-bold text-xl mb-5">Estudando esse mês</h3>
            <div className="relative h-28">
              <img
                className="max-w-28 max-h-28 w-full h-full absolute top-0 left-0"
                src="/avatars/lucas.png"
                alt=""
              />
              <img
                className="max-w-28 max-h-28 w-full h-full absolute top-0 left-14"
                src="/avatars/lucas.png"
                alt=""
              />
              <img
                className="max-w-28 max-h-28 w-full h-full absolute top-0 left-28"
                src="/avatars/lucas.png"
                alt=""
              />
              <img
                className="max-w-28 max-h-28 w-full h-full absolute top-0 left-42"
                src="/avatars/lucas.png"
                alt=""
              />
            </div>
            <p className="mt-5">e mais 200 alunos(as)</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Resumo</h3>
            <p className="font-medium">
              Python é uma linguagem ultra moderna, utilizada por grandes
              empresas como Google, YouTube, Industrial Light & Magic, Globo e
              muitas outras. Fácil de aprender, com código limpo e organizado,
              Python vem ganhando cada vez mais espaço, e chegou a sua hora de
              aprender. Curso criado pelo Prof. Gustavo Guanabara com uma
              temática divertida de vídeo-game para motivar seus alunos, é
              dividido em mundos para facilitar o estudo.
              <br /> <br />O primeiro mundo foi pensando de forma a apresentar a
              linguagem ao aluno, o professor irá introduzir a linguagem, seus
              conceitos, montar o primeiro programa e ensinar alguns recursos
              básicos.
            </p>
          </div>
        </div>
        {/* Card ao lado */}
        <div className="w-full max-w-sm">
          <img className="w-full mb-3" src="/oracle.svg" alt="" />
          <div className="divide-y p-2 shadow-lg rounded-md">
            <div className="flex flex-col items-center mb-3">
              <p className="text-brown text-2xl mb-3">
                <strong>Preço:</strong> R$250,00
              </p>
              <Link href="/">
                <a className="flex items-center justify-center bg-gold text-white text-xl p-2 rounded-md">
                  <FaShoppingCart className="w-10" />
                  <strong>Comprar</strong>
                </a>
              </Link>
            </div>
            <div className="pt-3">
              <div className="flex items-center">
                <FaShoppingCart className="w-10 mr-3" />
                <p className="text-brown text-2xl">
                  <strong>Carga Horaria:</strong> 15h
                </p>
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="w-10 mr-3" />
                <p className="text-brown text-2xl">
                  <strong>Categoria:</strong> Programação, Segurança
                </p>
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="w-10 mr-3" />
                <p className="text-brown text-2xl">
                  <strong>Nível:</strong> Básico
                </p>
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="w-10 mr-3" />
                <p className="text-brown text-2xl">
                  <strong>Idioma:</strong> Português
                </p>
              </div>
              <div className="flex items-center">
                <FaShoppingCart className="w-10 mr-3" />
                <p className="text-brown text-2xl">
                  <strong>Certificado:</strong> Sim
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card ao lado */}
      </div>
      <div className="container"></div>
    </Layout>
  );
};

export default Course;

export const getStaticProps: GetStaticProps = (
  context
): GetStaticPropsResult<CourseProps> => {
  const { slug } = context.params as CoursePathParams;
  return {
    props: {
      top10StudentsList: [
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
      ],
    },
  };
};

type CoursePathParams = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<CoursePathParams> = context => {
  return {
    paths: [
      {
        params: {
          slug: 'ccna-cisco',
        },
      },
      {
        params: {
          slug: '1',
        },
      },
    ],
    fallback: false,
  };
};
