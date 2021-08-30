import React from 'react';

const Certification: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-10 flex gap-10 px-10 flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 p-6">
        <img src="/product-manager.svg" alt="product-manager" />
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
            <img className="mr-9 w-8 lg:w-9" src="/icons/tick.svg" alt="tick" />
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Alto Nivel de Conhecimento e Aprendizado
            </p>
          </li>
          <li className="flex items-center my-7">
            <img className="mr-9 w-8 lg:w-9" src="/icons/tick.svg" alt="tick" />
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Você apredenderá os niveis mais baixos das regras padrões de
              segurança da informação
            </p>
          </li>
          <li className="flex items-center my-7">
            <img className="mr-9 w-8 lg:w-9" src="/icons/tick.svg" alt="tick" />
            <p className="text-grey-500 font-medium text-sm md:text-base">
              Qualidade e experiência em treinamentos imersivos e práticos.
            </p>
          </li>
        </ul>
        <button className="bg-gold text-white font-bold text-base md:text-lg rounded-md p-3 mt-5">
          Conheça nossas consultorias
        </button>
      </div>
    </section>
  );
};

export default Certification;
