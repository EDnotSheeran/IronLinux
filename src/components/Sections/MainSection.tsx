import React from 'react';
import { ButtonGold } from '@components/Buttons';

const data = {
  heading: {
    value: 'Quer aprender mais sobre o mundo de Linux e Segurança ?',
    highlight: ['Linux', 'Segurança'],
  },
  paragraph:
    'IronLinux presta serviços de treinamento e consultoria nas principais áreas de segurança e sistemas operacionais. Descubra mais entrando em contato conosco.',
  imageURL: '/people-studying-on-pc.svg',
};

function wordhighlight(text: string, highlightWords: string[]) {
  return text.split(' ').map((word, i) => {
    return (
      <span
        key={i}
        className={highlightWords.includes(word) ? 'text-gold' : undefined}
      >
        {word + ' '}
      </span>
    );
  });
}

const MainSection: React.FC = ({ children }) => {
  return (
    <section className="flex px-5 lg:px-0 justify-center items-center gap-7 lg:gap-10 lg:mt-10 flex-row flex-wrap">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h3 className="font-bold text-4xl font-poppins sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          {wordhighlight(data.heading.value, data.heading.highlight)}
        </h3>
        <p className="font-poppins text-brown text-base mt-2 md:mt-6 xl:text-lg 2xl:text-xl">
          {data.paragraph}
        </p>
        <div className="w-full h-34 flex flex-row">
          <div className="w-1/2 sm:w-auto h-full flex justify-start">
            <button className="mt-8 border-2 rounded-lg p-3 font-bold border-black hover:bg-black hover:text-white transition-colors">
              Conheça nossas Consultorias
            </button>
          </div>
          <div className="w-1/2 sm:w-auto h-full flex justify-start">
            <button className="mt-8 bg-gold text-white border-gold font-bold border-2 rounded-lg py-3 px-6 ml-4 gold-button">
              Veja os Cursos
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm xl:max-w-lg 2xl:max-w-xl md:flex items-center justify-center justify-items-center">
        <img className="w-full" src={data.imageURL} alt="image" />
      </div>
    </section>
  );
};

export default MainSection;
