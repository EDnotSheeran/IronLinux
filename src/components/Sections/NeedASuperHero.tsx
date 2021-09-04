import React from 'react';
import { AnimatedButton } from '@components/Buttons';
import Carousel, { Item } from '../Carousel';

const NeedASuperHero: React.FC = ({ children }) => {
  return (
    <div className="oval oval-top">
      <section className="bg-oval mb-20 pb-28 pt-28">
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
        <AnimatedButton className="bg-gold text-white mx-auto my-4 px-4 py-4 rounded-md font-bold font-poppins tracking-wider">
          Contate nossos experts
        </AnimatedButton>
        <>
          <Carousel className="w-full lg:justify-around mt-10 block">
            <Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img
                className="w-40"
                src="/avatars/vinicius.png"
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
            </Item>
            <Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img className="w-40" src="/avatars/gustavo.png" alt="Lucas" />
              <p className="text-center font-bold font-rubik text-lg ">
                Gustavo
              </p>
              <div className="speech-bubble-middle">
                <p className="font-medium text-base">
                  Eu posso ajudar com pentest
                </p>
              </div>
            </Item>
            <Item className="w-full lg:w-1/3 flex flex-col items-center">
              <img className="w-40" src="/avatars/lucas.png" alt="Lucas" />
              <p className="text-center font-bold font-rubik text-lg">Lucas</p>
              <div className="speech-bubble-left">
                <p className="font-medium text-base">
                  Eu posso ajudar com redes
                </p>
              </div>
            </Item>
          </Carousel>
        </>
      </section>
    </div>
  );
};

export default NeedASuperHero;
