import React from 'react';
import { AnimatedButton } from '@components/Buttons';

const Varieties: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-10 flex gap-10 px-10 flex-col-reverse lg:flex-row-reverse">
      <div className="w-full lg:w-1/2 p-6">
        <img src="/man-touching.svg" alt="man-touching" />
      </div>
      <div className="w-full lg:w-1/2 mt-7">
        <p className="text-grey-500 font-medium text-sm md:text-base">
          Conheça as variedades da IronLinux
        </p>
        <h3 className="text-grey-500 font-bold text-3xl my-5">
          Uma ampla seleção de cursos
        </h3>
        <p className="text-grey-500 font-medium text-sm md:text-base">
          Somos especialistas em implementar soluções com software open source e
          depois mostrar para o cliente como realizar a utilização das mesas..
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
        <AnimatedButton className="bg-gold text-white font-bold text-base md:text-lg rounded-md px-3 py-3 mt-5">
          Confira nossos cursos
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Varieties;
