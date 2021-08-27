import React from 'react';
const SpecialtiesSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-5 flex-col font-poppins">
      <div className="flex justify-center items-center flex-row py-5 font-poppins">
        <h1 className="text-3xl font-bold font-poppins">
          Uma ampla diversidades de aprendizados
        </h1>
      </div>
      <div className="flex flex-row  justify-center items-center font-poppins">
        <div
          className="
          flex
          flex-row
          h-50
        "
        >
          <div className="flex flex-col text-center justify-center items-center ">
            <img src="/icons/pinguin.svg" alt="image" />
            <div className="justify-start items-baseline text-center">
              <h1 className="text-lg font-semibold">S.O Linux</h1>
            </div>
            <p className="text-sm w-4/5 mt-2">
              Disponibilizamos certificação Linux para profissionais de TI
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center ">
            <img src="/icons/data-science.svg" alt="image" />
            <div className="justify-start items-baseline text-center">
              <h1 className="text-lg font-semibold">Data Science</h1>
            </div>
            <p className="text-sm w-4/5 mt-2">
              Entenda sobre ciência de dados e suas vantagens
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center ">
            <img src="/icons/pentest.svg" alt="image" />
            <div className="justify-start items-baseline text-center">
              <h1 className="text-lg font-semibold">Pentest</h1>
            </div>
            <p className="text-sm w-4/5 mt-2">
              Avalie a segurança utilizando testes de intrusão
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center ">
            <img src="/icons/terminal.svg" alt="image" />
            <div className="justify-start items-baseline text-center">
              <h1 className="text-lg font-semibold">Terminal</h1>
            </div>
            <p className="text-sm w-4/5 mt-2">
              Aprenda o essencial para utilização do Linux
            </p>
          </div>
        </div>{' '}
      </div>{' '}
    </section>
  );
};

export default SpecialtiesSection;
