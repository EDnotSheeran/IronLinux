import React from 'react';
import Head from 'next/head';
import {
  ShoppingCartIcon,
  ChartBarIcon,
  AcademicCapIcon,
  BeakerIcon,
  ChevronDownIcon,
  LightBulbIcon,
} from '@heroicons/react/solid';
import {
  ClockIcon,
  GlobeAltIcon,
  TranslateIcon,
} from '@heroicons/react/outline';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

type CourseProps = {
  top10StudentsList: {
    imageUrl: string;
    alt: string;
  }[];
};

const Course: React.FC<CourseProps> = ({ top10StudentsList }) => {
  return (
    <>
      <Head>
        <title>CCNA Cisco</title>
      </Head>
      <div className="oval-bg-t-page"></div>
      {/* Sobre o Curso Desktop */}
      <div className="container lg:px-0 mx-auto mb-10 hidden lg:flex">
        {/* Resumo */}
        <div className="w-full mt-20">
          <h1 className="font-semibold text-7xl">CCNA Cisco</h1>
          <div className="mt-20">
            <h3 className="font-bold text-xl mb-5">Estudando esse mês</h3>
            <div className="relative h-20">
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-0"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-14"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-28"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-42"
                src="/avatars/vinicius.png"
                alt=""
              />
            </div>
            <p className="mt-5">e mais 200 alunos(as)</p>
          </div>
          <div className="mt-16 pr-10 max-w-3xl">
            <h3 className="font-semibold text-xl mb-5">Resumo</h3>
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
        {/* Card de Informações */}
        <div className="w-full max-w-sm">
          <img
            className="w-full max-h-64 object-cover mb-3 rounded-md"
            src="/oracle.svg"
            alt=""
          />
          <div className="divide-y p-4 rounded-md bx-shaddow">
            <div className="flex flex-col items-center mb-4">
              <p className="text-brown text-2xl mb-3">
                <strong>Preço:</strong> R$250,00
              </p>
              <Link href="/">
                <a className="flex items-center justify-center bg-gold text-white px-3 py-2 rounded-t rounded-b btn-shaddow">
                  <ShoppingCartIcon className="w-7" />
                  <strong className="text-lg ml-3">Comprar</strong>
                </a>
              </Link>
            </div>
            <ul className="pt-3">
              <li className="flex align-middle my-5">
                <ClockIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Carga Horaria:</strong> 15h
                </p>
              </li>
              <li className="flex align-middle my-5">
                <GlobeAltIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Categoria:</strong> Programação, Segurança
                </p>
              </li>
              <li className="flex align-middle my-5">
                <ChartBarIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Nível:</strong> Básico
                </p>
              </li>
              <li className="flex align-middle my-5">
                <TranslateIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Idioma:</strong> Português
                </p>
              </li>
              <li className="flex align-middle my-5">
                <AcademicCapIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Certificado:</strong> Sim
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sobre o Curso Mobile */}
      <div className="container lg:px-0 mx-auto mb-10 lg:hidden">
        {/* Resumo */}
        <div className="w-full mt-20">
          <img
            className="w-full max-h-96 object-cover mb-3 rounded-md"
            src="/oracle.svg"
            alt=""
          />
          <h1 className="font-semibold text-5xl my-10">CCNA Cisco</h1>
          <div className="divide-y p-4 rounded-md">
            <ul className="">
              <li className="flex align-middle my-5">
                <ClockIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Carga Horaria:</strong> 15h
                </p>
              </li>
              <li className="flex align-middle my-5">
                <GlobeAltIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Categoria:</strong> Programação, Segurança
                </p>
              </li>
              <li className="flex align-middle my-5">
                <ChartBarIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Nível:</strong> Básico
                </p>
              </li>
              <li className="flex align-middle my-5">
                <TranslateIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Idioma:</strong> Português
                </p>
              </li>
              <li className="flex align-middle my-5">
                <AcademicCapIcon className="w-7 mr-3 text-gold" />
                <p className="text-brown text-xl max-w-5/6">
                  <strong>Certificado:</strong> Sim
                </p>
              </li>
            </ul>
            <div className="flex flex-col items-center mb-4">
              <p className="text-brown text-2xl my-5">
                <strong>Preço:</strong> R$250,00
              </p>
              <Link href="/">
                <a className="flex w-full items-center justify-center bg-gold hover:bg-gold-dark text-white px-3 py-2 rounded-t rounded-b btn-shaddow">
                  <ShoppingCartIcon className="w-7" />
                  <strong className="text-lg ml-3">Comprar</strong>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="font-bold text-xl mb-5">Estudando esse mês</h3>
            <div className="relative h-20">
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-0"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-14"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-28"
                src="/avatars/vinicius.png"
                alt=""
              />
              <img
                className="max-w-20 max-h-20 w-full h-full absolute top-0 left-42"
                src="/avatars/vinicius.png"
                alt=""
              />
            </div>
            <p className="mt-5">e mais 200 alunos(as)</p>
          </div>
          <div className="mt-16 pr-10 max-w-3xl">
            <h3 className="font-semibold text-xl mb-5">Resumo</h3>
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
      </div>
      {/* Counteúdo */}
      <div className="container mx-auto lg:px-0 mb-10">
        <ul className="divide-y rounded-md bx-shaddow px-4">
          <li className="flex items-center py-4">
            <BeakerIcon className="w-8 mr-3 text-gold" />
            <span className="font-semibold text-xl">Conteúdo</span>
          </li>
          <Disclosure as="li" className="flex flex-col py-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between">
                  <span className="text-brown text-left text-lg font-medium ml-3">
                    1 - Preparando o ambiente
                  </span>
                  <ChevronDownIcon
                    className={`text-gold w-8 mr-6 ${
                      open ? 'transform rotate-180 transition-transform' : ''
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel>
                  <p className="block ml-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    optio corporis quas, rerum in ullam asperiores dignissimos
                    deleniti soluta laborum veniam quia eius iure aliquam
                    distinctio sit quidem. Necessitatibus, doloribus?
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="li" className="flex flex-col py-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between">
                  <span className="text-brown text-left text-lg font-medium ml-3">
                    2 - Váriaveis
                  </span>
                  <ChevronDownIcon
                    className={`text-gold w-8 mr-6 ${
                      open ? 'transform rotate-180 transition-transform' : ''
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel>
                  <p className="block ml-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    optio corporis quas, rerum in ullam asperiores dignissimos
                    deleniti soluta laborum veniam quia eius iure aliquam
                    distinctio sit quidem. Necessitatibus, doloribus?
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </ul>
      </div>
      {/* Instrutor */}
      <div className="container mx-auto lg:px-0">
        <div className="bx-shaddow rounded-md p-4 pb-16">
          <div className="flex items-center mb-7">
            <LightBulbIcon className="text-gold w-10 mr-3" />
            <span className="font-semibold text-xl">Instrutor</span>
          </div>
          <ul className="divide-y px-2">
            <li className="flex flex-col lg:flex-row gap-7">
              <img
                className="max-w-24 max-h-24"
                src="/avatars/vinicius.png"
                alt=""
              />
              <div>
                <h6 className="font-semibold text-lg lg:text-xl mb-3">
                  Vinicius Souza
                </h6>
                <p className="text-base lg:text-lg">
                  Meu nome é Vinicius, conhecido por Lucio ou Vini e sou um dos
                  fundadores da IronLinux. Formado em Redes de computadores,
                  trabalho na área de Tecnologia há 5 anos e hoje atuo como
                  Analista de Segurança da Informação-CSIRT. Sou fanático por
                  Linux, segurança, e como alguém que gosta de aproveitar todo o
                  tempo disponível, amo automatizar tudo.
                  <br /> Sou uma pessoa super empolgada em aprender coisas
                  novas, transferir conhecimento e incentivar meus colegas.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
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
