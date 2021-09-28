import React from 'react';
import Head from 'next/head';
import { Button, Carousel, Stars } from '@components';
import { Currency, WordHighLight } from '@libs/utils';
import { GetStaticProps } from 'next';
import Error from 'next/error';

// API
import { comments } from './api/comments';
import { courses } from './api/courses';
import { recentPosts } from './api/posts';
import { specialities } from './api/specialities';

type Props = {
  errorCode?: number;
};

const Home: React.FC<HomePageProps & Props> = ({
  errorCode,
  recentPosts,
  comments,
  courses,
  specialities,
  sections: { main },
}) => {
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      {/* Principal */}
      <section className="flex px-5 lg:px-0 justify-center items-center gap-7 lg:gap-10 lg:mt-10 flex-row flex-wrap mb-20">
        <div className="max-w-sm sm:max-w-md md:max-w-xlg xl:max-w-2xl 2xl:max-w-3xl">
          <h3 className="font-bold text-4xl font-poppins sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {WordHighLight(main.heading.value, main.heading.highlight)}
          </h3>
          <p className="font-poppins text-brown text-base mt-2 md:mt-6 xl:text-lg 2xl:text-xl">
            {''}
          </p>
          <button className="text-xs md:text-base mt-8 border-2 rounded-lg py-3 px-3 max-w-52 md:max-w-max  sm:px-3 font-bold border-black hover:bg-black hover:text-white transition-colors">
            Conheça nossas Consultorias
          </button>
          <Button className="text-xs md:text-base inline-block mt-8 bg-gold py-3 px-3 ml-5 text-white font-bold rounded-lg border-2 border-gold">
            Veja os Cursos
          </Button>
        </div>
        <div className="w-full max-w-sm xl:max-w-lg 2xl:max-w-xl md:flex items-center justify-center justify-items-center">
          <img className="w-full" src={main.imageURL} alt="image" />
        </div>
      </section>
      {/* Principal */}
      {/* Uma ampla diversidades de aprendizados */}
      <div className="bg-oval">
        <section className="container mx-auto pb-10">
          <h3 className="font-bold text-3xl text-center mb-14">
            Uma ampla diversidades de aprendizados
          </h3>
          <Carousel className="w-screen">
            {specialities &&
              specialities.map((speciality, i) => (
                <Carousel.Item key={i} className="w-full md:w-1/2 lg:w-1/4">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-full max-w-16"
                      src={speciality.imageURL}
                      alt={speciality.name}
                    />
                    <p className="font-semibold text-xl text-center">
                      {speciality.name}
                    </p>
                    <p className="font-medium text-base text-brown text-center max-w-64">
                      {speciality.description}
                    </p>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
          <Button className="mx-auto mt-28 bg-gold text-white rounded-md py-3 px-14">
            Saiba mais
          </Button>
        </section>
      </div>
      {/* Uma ampla diversidades de aprendizados */}
      {/* Cursos Disponíveis */}
      <section className="container mx-auto pt-10 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center  py-10">
          Cursos Disponíveis
        </h1>
        <Carousel>
          {courses.map((course, i) => {
            return (
              <Carousel.Item key={i} className="w-full md:w-1/2 lg:w-1/4">
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
                  <Button className="bg-gold font-poppins text-white text-bold rounded-md py-2 px-5 pointer-events-auto mt-3">
                    Comprar
                  </Button>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
      {/* Cursos Disponíveis */}
      {/* Comentários */}
      <section className="flex items-center bg-gradient py-8 mb-10">
        <Carousel buttons={true}>
          {comments.map((comment, i) => (
            <Carousel.Item key={i} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-col items-center">
                <img
                  className="max-w-24 rounded-full mb-3"
                  src={comment.author.avatarURL}
                  alt=""
                />
                <q className="text-center font-rubik max-w-70 leading-7">
                  {comment.content}
                </q>
                <p className="text-center font-rubik text-lg font-medium leading-7">
                  {comment.author.name}
                </p>
                <p className="text-center font-rubik text-sm py-2 text-grey">
                  {comment.author.job}
                </p>
                <Stars max={5} value={comment.stars} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      {/* Comentários */}
      {/*  Uma ampla seleção de cursos */}
      <section className="container mx-auto mb-10 flex gap-10 flex-col-reverse lg:flex-row-reverse">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 p-6">
          <img src="/img/man-touching.svg" alt="man-touching" />
        </div>
        {/* Imagem */}
        {/* Texto */}
        <div className="w-full lg:w-1/2 mt-7">
          <p className="text-grey-500 font-medium text-sm md:text-base">
            Conheça as variedades da IronLinux
          </p>
          <h3 className="text-grey-500 font-bold text-3xl my-5">
            Uma ampla seleção de cursos
          </h3>
          <p className="text-grey-500 font-medium text-sm md:text-base">
            Somos especialistas em implementar soluções com software open source
            e depois mostrar para o cliente como realizar a utilização das
            mesas..
          </p>
          <div className="my-5">
            <p className="text-grey-500 font-bold text-sm md:text-base mb-4">
              Aprenda Sem Limites
            </p>
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Desenvolva habilidades com cursos, certificados e graduações
              <br />
              on-line.
            </p>
          </div>
          <div className="my-5">
            <p className="text-grey-500 font-bold text-sm md:text-base mb-4">
              Prepare-se para uma carreira
            </p>
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Em áreas de alta demanda, como TI, IA e engenharia de nuvem, exige
              conhecimentos em Segurança de Informação
            </p>
          </div>
          <div className="my-5">
            <p className="text-grey-500 font-bold text-sm md:text-base mb-4">
              Tenha um histórico reconhecido pelo setor
            </p>
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Demonstre suas novas habilidades compartilhando o certificado do
              curso, certificado profissional e afins...
            </p>
          </div>
          <Button className="bg-gold text-white font-bold text-base md:text-lg rounded-md px-3 py-3 mt-5">
            Confira nossos cursos
          </Button>
        </div>
        {/* Texto */}
      </section>
      {/*  Uma ampla seleção de cursos */}
      {/* Certificação Expert */}
      <section className="container mx-auto mb-10 flex gap-10 px-10 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 p-6">
          <img src="/img/product-manager.svg" alt="product-manager" />
        </div>
        <div className="w-full lg:w-1/2 mt-7">
          <p className="text-grey-500 font-medium text-sm md:text-base">
            Não deixe para amanhã, o que se pode ter hoje.
          </p>
          <h3 className="text-grey-500 font-bold text-3xl my-5">
            Certificação Expert
          </h3>
          <p className="text-grey-500 font-medium text-sm md:text-base">
            Nossa plataforma de cursos possuem funções que auxiliam o aluno no
            processo de ensino e aprendizagem, possibilitando o emprego prático
            dos conhecimentos adquiridos!
          </p>
          <ul>
            <li className="flex items-center my-7">
              <img
                className="mr-9 w-8 lg:w-9"
                src="/img/icons/tick.svg"
                alt="tick"
              />
              <p className="text-grey-500 font-medium text-sm md:text-base">
                Alto Nivel de Conhecimento e Aprendizado
              </p>
            </li>
            <li className="flex items-center my-7">
              <img
                className="mr-9 w-8 lg:w-9"
                src="/img/icons/tick.svg"
                alt="tick"
              />
              <p className="text-grey-500 font-medium text-sm md:text-base">
                Você apredenderá os niveis mais baixos das regras padrões de
                segurança da informação
              </p>
            </li>
            <li className="flex items-center my-7">
              <img
                className="mr-9 w-8 lg:w-9"
                src="/img/icons/tick.svg"
                alt="tick"
              />
              <p className="text-grey-500 font-medium text-sm md:text-base">
                Qualidade e experiência em treinamentos imersivos e práticos.
              </p>
            </li>
          </ul>
          <Button className="bg-gold text-white font-bold text-base md:text-lg rounded-md mt-5 px-3 py-4">
            Conheça nossas consultorias
          </Button>
        </div>
      </section>
      {/* Certificação Expert */}
      {/* Precisa de Um Expecialista ? */}
      <section className="bg-oval-reverse mb-20 pb-28 pt-28">
        <h3 className="text-4xl font-bold text-center text-grey-500 mb-8">
          Precisa de um especialista?
        </h3>
        <div className="mb-10">
          <p className="text-blue-1 text-base font-medium text-center">
            Você precisa de alguma ajuda com:
          </p>
          <p className="text-blue-1 text-base font-medium text-center">
            Linux, Segurança, Servidores ou Roteadores?
          </p>
        </div>
        <Button className="bg-gold text-white mx-auto my-4 px-4 py-4 rounded-md font-bold font-poppins tracking-wider">
          Contate nossos experts
        </Button>
        <>
          <Carousel className="w-full lg:justify-around mt-10 block">
            <Carousel.Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img
                className="w-40"
                src="/img/avatars/vinicius.png"
                alt="Vinicius"
              />
              <p className="text-center font-bold font-rubik text-lg">
                Vinicius
              </p>
              <div className="speech-bubble-right ">
                <p className="font-medium text-base">
                  Eu posso ajudar com Servidores
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img
                className="w-40"
                src="/img/avatars/gustavo.png"
                alt="Lucas"
              />
              <p className="text-center font-bold font-rubik text-lg ">
                Gustavo
              </p>
              <div className="speech-bubble-middle">
                <p className="font-medium text-base">
                  Eu posso ajudar com pentest
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img className="w-40" src="/img/avatars/lucas.png" alt="Lucas" />
              <p className="text-center font-bold font-rubik text-lg">Lucas</p>
              <div className="speech-bubble-left">
                <p className="font-medium text-base">
                  Eu posso ajudar com redes
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </>
      </section>
      {/* Últimos posts do blog */}
      <section className="container mx-auto mb-20">
        <h3 className="text-4xl font-bold text-center text-grey-500 mb-8">
          Últimos posts do blog:
        </h3>
        <Carousel>
          {recentPosts.map((post, i) => (
            <Carousel.Item
              key={i}
              className="w-full sm:w-1/2 lg:w-1/3 sm:px-5 ml-px"
            >
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
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      {/* Últimos posts do blog */}
      {/* Fale Conosco */}
      <div className="bg-oval">
        <section className="container mx-auto lg:flex lg:flex-row pb-28 pt-28 ">
          <div className="lg:w-1/2">
            <img
              src="/img/telemarketing.svg"
              className="hidden lg:block w-full"
              alt="Fale Conosco"
            />
          </div>
          <div className="px-6 sm:px-10 lg:w-1/2">
            <h3 className="text-4xl pb-6 font-bold">Fale Conosco</h3>
            <div className="text-xl mb-5 ">
              <label className="block text-xl" htmlFor="name">
                Seu Nome
              </label>
              <input
                className="border-2 focus:border-black rounded-md p-2 w-full"
                name="name"
                type="text"
              />
            </div>
            <div className="text-xl mb-5">
              <label className="block text-xl" htmlFor="email">
                Seu E-Mail
              </label>
              <input
                className="border-2 focus:border-black rounded-md p-2 w-full"
                name="email"
                type="text"
              />
            </div>
            <div className="text-xl mb-5">
              <label className="block text-xl" htmlFor="subject">
                Assunto
              </label>
              <input
                className="border-2 focus:border-black rounded-md p-2 w-full"
                name="subject"
                type="text"
              />
            </div>
            <div className="text-xl mb-5">
              <label className="block text-xl" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="border-2 rounded-md p-2 w-full"
                rows={4}
                name="message"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Fale Conosco */}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomePageProps & Props> =
  async context => {
    return {
      props: {
        recentPosts,
        comments,
        courses,
        specialities,
        sections: {
          main: {
            heading: {
              value: 'Quer aprender mais sobre o mundo de Linux e Segurança ?',
              highlight: ['Linux', 'Segurança'],
            },
            paragraph:
              'IronLinux presta serviços de treinamento e consultoria nas principais áreas de segurança e sistemas operacionais. Descubra mais entrando em contato conosco.',
            imageURL: '/img/people-studying-on-pc.svg',
          },
        },
      },
    };
  };
