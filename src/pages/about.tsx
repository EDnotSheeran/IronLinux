import React from 'react';
import { Button } from '@components';

const About: NextPage = ({ children }) => {
  return (
    <>
      <div className="oval-bg-t-page relative"></div>
      <section className="container mx-auto px-10 lg:px-0 flex">
        <div className="float-left mt-10">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            <span className="text-gold">IronLinux:</span> tecnologia, segurança
            e agilidade. Saiba mais clicando no botão abaixo!
          </h1>
          <Button className="bg-gold text-white font-bold px-6 sm:px-10 py-2 sm:py-3 rounded-sm font-poppins mx-auto mt-4 xl:mt-10">
            Saiba mais
          </Button>
        </div>
        <img
          className="float-right hidden lg:block"
          src="/mascote.svg"
          alt=""
        />
      </section>
      <section className="container mx-auto px-10 lg:px-0 flex flex-wrap flex-col lg:flex-row mt-16 pt-10">
        <img
          className="flex-1 lg:max-w-1/2 object-cover"
          src="/IMG_9431 1.png"
          alt=""
        />
        <div className="flex-1 lg:max-w-1/2 bg-gold-light py-10 px-14 xl:py-24 xl:px-20 flex items-center justify-center flex-col border-2 ">
          <h3 className="text-center font-bold text-3xl xl:text-4xl mb-10">
            Sobre a empresa
          </h3>
          <p className="text-center leading-7">
            A Ironlinux é uma empresa de tecnologia focada em consultorias e
            treinamentos de TI, acreditamos na força do código aberto e na
            cultura do compartilhamento de informações, por isso criamos
            diversos artigos que poderão auxiliar profissionais da área e
            pessoas que desejam ingressar no mundo de TI, queremos contribuir
            com um espaço positivo na internet e oferecer nossos serviços para
            ajudar as empresas a se tornarem exemplo no quesito segurança e
            agilidade.
          </p>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="my-20">
          <h3 className="text-center font-bold text-4xl mb-5">
            Regras e Políticas
          </h3>
          <p className="text-center text-xl">
            Nossos tutoriais são para fins de aprendizado e não indicamos o uso
            contra empresas ou pessoas. Nossas opiniões expressas não são por
            conta dos pensamentos ou experiências trabalhistas. Nosso objetivo é
            levar a informação e conteúdo, apenas para fins educativos.
          </p>
        </div>
      </section>
      <section className="container mx-auto lg:px-0 pb-10">
        <h1 className="text-4xl font-bold text-center">Fundadores</h1>
        <div className="flex gap-3 flex-wrap">
          <div className="relative flex-1 bg-gold-light p-4 pt-20 border-2 min-w-80 mt-20">
            <img
              className="w-28 absolute -top-14 left-1/2 transform -translate-x-1/2"
              src="/avatars/vinicius.png"
              alt=""
            />
            <p className="text-center leading-7">
              Meu nome é Vinicius, conhecido por Lucio ou Vini e sou um dos
              fundadores da IronLinux. Formado em Redes de computadores,
              trabalho na área de Tecnologia há 5 anos e hoje atuo como Analista
              de Segurança da Informação-CSIRT. Sou fanático por Linux,
              segurança, e como alguém que gosta de aproveitar todo o tempo
              disponível, amo automatizar tudo.
              <br /> Sou uma pessoa super empolgada em aprender coisas novas,
              transferir conhecimento e incentivar meus colegas.
            </p>
          </div>
          <div className="relative flex-1 bg-gold-light p-4 pt-20 border-2 min-w-80 mt-20">
            <img
              className="w-28 absolute -top-14 left-1/2 transform -translate-x-1/2"
              src="/avatars/gustavo.png"
              alt=""
            />
            <p className="text-center leading-7">
              Meu nome é Gustavo Viana, um dos fundadores da IronLinux, formado
              em Análise e Desenvolvimento de Sistemas pela FATEC e
              pós-graduando em Cybersecurity na Daryus. Trabalho na área de
              Segurança da Informação há 4 anos e atualmente ocupo o cargo de
              Segurança Ofensiva/Red Team.
              <br /> Sou aficionado por Segurança da Informação e um dos meus
              objetivos é disseminar o conhecimento que tenho. Segurança
              Ofensiva é meu foco principal no trabalho e me arrisco um pouco
              com Python.
            </p>
          </div>
          <div className="relative flex-1 bg-gold-light p-4 pt-20 border-2 min-w-80 mt-20">
            <img
              className="w-28 absolute -top-14 left-1/2 transform -translate-x-1/2"
              src="/avatars/lucas.png"
              alt=""
            />
            <p className="text-center leading-7">
              Meu nome é Lucas, um dos fundadores da IronLinux. Trabalho na área
              de tecnologia há 4 anos, sou formado em redes de computadores e
              hoje atuo na área de segurança da informação em uma equipe de
              CSIRT. Sou apaixonado por tecnologia, sistemas linux,
              cibersegurança, automação de tarefas e soluções de código aberto.
              <br />
              Acredito que boa parte das empresas brasileiras tem muito para
              evoluir na parte de infraestrutura, segurança, inovação e
              automação de processos.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gold-80 p-10 lg:p-8">
        <h2 className="text-center text-white font-bold text-5xl my-5">
          Alguns números
        </h2>
        <p className="text-white text-xl text-center">
          A Iron Linux é uma empresa para ensino e aprendizado, focada na
          qualificação e construção de carreira de seus alunos, oferecendo os
          melhores instrutores.
        </p>
        <div className="w-3/4 mx-auto flex flex-col sm:flex-row justify-evenly">
          <div className="flex-1  flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              20
            </p>
            <p className="text-white text-center text-xl max-w-56">
              instrutores
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              35
            </p>
            <p className="text-white text-center text-xl max-w-56">
              cursos disponiveis
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              50
            </p>
            <p className="text-white text-center text-xl max-w-56">
              mil minutos em video
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-evenly mb-5">
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              12
            </p>
            <p className="text-white text-center text-xl max-w-56">
              mil lições feitas pelos alunos
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              3+
            </p>
            <p className="text-white text-center text-xl max-w-56">
              mil alunos cadastrados e ativos
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              15
            </p>
            <p className="text-white text-center text-xl max-w-56">
              tipos de consultorias
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center mt-8 lg:mt-20">
            <p className="text-white text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              10+
            </p>
            <p className="text-white text-center text-xl max-w-56">
              mil acessos no blog
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
