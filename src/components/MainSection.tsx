import React from 'react';
import { ButtonGold } from '@components/Buttons';

const MainSection: React.FC = () => {
  return (
    <section className="flex px-5 lg:px-0 justify-center items-center gap-7 lg:gap-10 lg:mt-10 flex-col lg:flex-row">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h3 className="font-bold text-4xl font-poppins sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Quer aprender mais sobre o mundo de{' '}
          <span className="text-gold">Linux</span> e{' '}
          <span className="text-gold">Segurança</span>?
        </h3>
        <p className="font-poppins text-brown text-base mt-2 md:mt-6 xl:text-lg 2xl:text-xl">
          IronLinux presta serviços de treinamento e consultoria nas principais
          áreas de segurança e sistemas operacionais. Descubra mais entrando em
          contato conosco.
        </p>
        <button className="mt-4 md:mt-8 text-xs md:text-sm border-2 rounded-lg w-3/6 sm:w-56 md:p-3 font-bold border-black hover:bg-black hover:text-white transition-colors">
          Conheça nossas Consultorias
        </button>
        <ButtonGold
          data-text="Veja os Cursos"
          className="mt-4 md:mt-8 text-xs md:text-base w-2/6 sm:w-48 py-3 inline-block ml-2 md:ml-9 border-2 border-gold"
        >
          Veja os Cursos
        </ButtonGold>
      </div>
      <div className="max-w-sm xl:max-w-3xl md:flex items-center justify-center justify-items-center">
        <img
          className="w-full max-w-md 2xl:max-w-xl"
          src="/people-studying-on-pc.svg"
          alt="image"
        />
      </div>
    </section>
  );
};

export default MainSection;
