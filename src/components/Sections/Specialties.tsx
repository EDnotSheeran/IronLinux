import React from 'react';
import Carousel, { Item } from '@components/Carousel';
import { AnimatedButton } from '@components/Buttons';

type SpecialtiesProps = {
  specialities: {
    name: string;
    description: string;
    imageURL: string;
  }[];
};

const specialities = [
  {
    name: 'S.O Linux',
    description: 'Disponibilizamos certificação Linux para profissionais de TI',
    imageURL: '/icons/pinguin.svg',
  },
  {
    name: 'Data Science',
    description: 'Entenda sobre ciência de dados e suas vantagens',
    imageURL: '/icons/data-science.svg',
  },
  {
    name: 'Pentest',
    description: 'Avalie a segurança utilizando testes de intrusão',
    imageURL: '/icons/pentest.svg',
  },
  {
    name: 'Terminal',
    description: 'Aprenda o essencial para utilização do Linux',
    imageURL: '/icons/terminal.svg',
  },
];

const SpecialtiesSection: React.FC = () => {
  return (
    <div className="oval oval-bottom">
      <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <h3 className="font-bold text-3xl text-center mb-14">
          Uma ampla diversidades de aprendizados
        </h3>
        <Carousel className="w-screen">
          {specialities &&
            specialities.map((speciality, i) => (
              <Item key={i} className="w-full md:w-1/2 lg:w-1/4">
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
              </Item>
            ))}
        </Carousel>
        <AnimatedButton className="mx-auto mt-28 bg-gold text-white rounded-md py-3 px-14 mb-10">
          Saiba mais
        </AnimatedButton>
      </section>
    </div>
  );
};

export default SpecialtiesSection;
