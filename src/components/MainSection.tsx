import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center gap-10 mt-10 text-xs md:text-sm lg:text-base">
      <div className="max-w-xl">
        <h3 className="font-bold text-4xl font-poppins">
          Quer aprender mais sobre o mundo de{' '}
          <span className="text-gold">Linux</span> e{' '}
          <span className="text-gold">Segurança</span>?
        </h3>
        <p className="font-poppins text-brown text-base mt-6">
          IronLinux presta serviços de treinamento e consultoria nas principais
          áreas de segurança e sistemas operacionais. Descubra mais entrando em
          contato conosco.
        </p>
        <div className="w-full h-34 flex flex-row">
          <div className="w-1/2 h-full flex justify-start">
            <button className="mt-8 border-2 rounded-lg p-3 font-bold border-black hover:bg-black hover:text-white transition-colors">
              Conheça nossas Consultorias
            </button>
          </div>
          <div className="w-1/2 h-full flex flex-row justify-start">
            <button className="mt-8 bg-gold text-white border-gold font-bold border-2 rounded-lg py-3 px-6 ml-4 gold-button">
              Veja os Cursos
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden md:flex  hidden items-center justify-center justify-items-center">
        <img
          className="w-full max-w-md md:max-w-2xl"
          src="/people-studying-on-pc.svg"
          alt="image"
        />
      </div>
    </section>
  );
};

export default MainSection;
