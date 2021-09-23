import React from 'react';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

type Panels = 'SECURITY' | 'WEB' | 'APLICATIONS' | 'INOVATION';

const Consultancies: React.FC = ({ children }) => {
  const [activePanel, setActivePanel] = React.useState<Panels>();
  const [panel, setPanel] = React.useState<ReactNode>(DefaultPanel);

  React.useEffect(() => {
    switch (activePanel) {
      case 'SECURITY':
        setPanel(<></>);
        break;
      case 'WEB':
        setPanel(<></>);
        break;
      case 'APLICATIONS':
        setPanel(<></>);
        break;
      case 'INOVATION':
        setPanel(<></>);
        break;

      default:
        break;
    }
  }, [activePanel]);

  return (
    <>
      <div className="oval-bg-t-page"></div>
      <section className="container mx-auto lg:px-0">
        <h1 className="text-4xl font-bold text-grey-500 mb-20">Consultorias</h1>
        <div className="grid grid-cols-2 lg:flex">
          <button
            onClick={() => setActivePanel('SECURITY')}
            className="flex-1 flex flex-col items-center mb-10"
          >
            <img
              className="w-full max-w-32 mb-5"
              src="/seguranca-de-dados.svg"
              alt=""
            />
            <p className="font-semibold text-lg text-gray-400 mt-auto">
              Segurança de Dados
            </p>
          </button>
          <button
            onClick={() => setActivePanel('WEB')}
            className="flex-1 flex flex-col items-center mb-10"
          >
            <img
              className="w-full max-w-32 mb-5"
              src="/redes-de-computadores.svg"
              alt=""
            />
            <p className="font-semibold text-lg text-gray-400 mt-auto">
              Redes de Computadores
            </p>
          </button>
          <button
            onClick={() => setActivePanel('APLICATIONS')}
            className="flex-1 flex flex-col items-center mb-10"
          >
            <img
              className="w-full max-w-32 mb-5"
              src="/seguranca-de-aplicacoes.svg"
              alt=""
            />
            <p className="font-semibold text-lg text-gray-400 mt-auto">
              Segurança de Aplicações
            </p>
          </button>
          <button
            onClick={() => setActivePanel('INOVATION')}
            className="flex-1 flex flex-col items-center mb-10"
          >
            <img
              className="w-full max-w-32 mb-5"
              src="/inovacao-em-seguranca.svg"
              alt=""
            />
            <p className="font-semibold text-lg text-gray-400 mt-auto">
              Inovação em Segurança
            </p>
          </button>
        </div>
        {panel}
      </section>
      <div className="oval-bg-reverse h-60"></div>
    </>
  );
};

export default Consultancies;

const DefaultPanel: React.FC = () => {
  return (
    <>
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center text-grey-500 my-8">
          Consultorias
        </h2>
        <p className="text-xl leading-7 text-center text-gray-700 px-16">
          A Ironlinux é uma empresa de tecnologia focada em consultorias e
          treinamentos de TI, acreditamos na força do código aberto e na cultura
          do compartilhamento de informações, por isso criamos diversos artigos
          que poderão auxiliar profissionais da área e pessoas que desejam
          ingressar no mundo de TI, queremos contribuir com um espaço positivo
          na internet e oferecer nossos serviços para ajudar as empresas a se
          tornarem exemplo no quesito segurança e agilidade.
        </p>
      </div>
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center text-grey-500 my-8">
          Processo de Consultoria
        </h2>
        <p className="text-xl leading-7 text-center text-gray-700 px-16">
          Por mais de 2 anos, a IronLinux tem ajudado organizações de diferentes
          escalas e estruturas a melhorar e modernizar suas estratégias de TI.
          Alguns de nossos especialistas em TI trabalharam no setor por mais de
          cinco anos. Isso nos permitiu criar uma abordagem eficaz para
          consultoria de TI que nos permite oferecer o máximo benefício no menor
          tempo possível.
        </p>
      </div>
      <div className="flex flex-wrap gap-20 mb-20">
        <div className="flex-1 bx-shaddow rounded-md p-9 min-w-80">
          <h3 className="text-xl text-grey-500 font-semibold mb-10 text-center">
            Análise
          </h3>
          <img className="w-full max-w-36 mx-auto" src="/analise.svg" alt="" />
          <p className="font-medium text-center text-grey mt-10 leading-7">
            Nossos consultores de TI estudam suas soluções de software
            existentes e as formas em que seus funcionários as usam,
            identificando problemas em fluxos de trabalho e automação.
          </p>
        </div>
        <div className="flex-1 bx-shaddow rounded-md p-9 min-w-80">
          <h3 className="text-xl text-grey-500 font-semibold mb-10 text-center">
            Estratégia
          </h3>
          <img
            className="w-full max-w-36 mx-auto"
            src="/estrategia.svg"
            alt=""
          />
          <p className="font-medium text-center text-grey mt-10 leading-7">
            Os consultores projetam um roteiro e uma estratégia que ajudará sua
            empresa a aproveitar as tecnologias mais recentes e desorganizar sua
            infraestrutura de software.
          </p>
        </div>
        <div className="flex-1 bx-shaddow rounded-md p-9 min-w-80">
          <h3 className="text-xl text-grey-500 font-semibold mb-10 text-center">
            Performance
          </h3>
          <img
            className="w-full max-w-36 mx-auto"
            src="/performance.svg"
            alt=""
          />
          <p className="font-medium text-center text-grey mt-10 leading-7">
            Nossos especialistas analisarão de perto seus fluxos de trabalho,
            rastreando o desempenho para descobrir os pontos fracos.
          </p>
        </div>
      </div>
    </>
  );
};
