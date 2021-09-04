import React from 'react';
import Layout from '@components/Layout';
import { SearchIcon } from '@heroicons/react/solid';
import Select, { GroupTypeBase, Styles } from 'react-select';
import { AnimatedButton } from '@components/Buttons';
import { Currency } from '@helpers/currency';

const colourStyles:
  | Partial<
      Styles<
        {
          value: string;
          label: string;
        },
        false,
        GroupTypeBase<{
          value: string;
          label: string;
        }>
      >
    >
  | undefined = {
  container: styles => {
    return {
      ...styles,
      minWidth: '5rem',
    };
  },
  control: styles => {
    return {
      ...styles,
      height: '3rem',
      borderColor: 'rgba(209, 213, 219, var(--tw-border-opacity))',
      borderWidth: '2px',
      flexDirection: 'row-reverse',
      ':active': {
        boxShadow: 'none',
      },
      ':hover': {
        boxShadow: 'none',
        borderColor: 'rgb(209, 213, 219)',
      },
    };
  },
  indicatorsContainer: styles => {
    return {
      ...styles,
      backgroundColor: 'rgb(244, 190, 2)',
      width: '3rem',
      height: '3rem',
      marginTop: '-2px',
      marginLeft: '-2px',
      borderRadius: '0.375rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  indicatorSeparator: styles => {
    return {
      display: 'none',
    };
  },
};

type Course = {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  slug: string;
};

const Courses: Course[] = [
  {
    title: 'Oracle',
    imageURL: '/oracle.svg',
    description:
      'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Python',
    imageURL: '/python.svg',
    description:
      'Fique especialista em Python com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Android',
    imageURL: '/android.svg',
    description:
      'Fique especialista em Pentest Mobile com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'CCNA Oracle',
    imageURL: '/cisco.svg',
    description:
      'Fique especialista em redes de computadores com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Oracle',
    imageURL: '/oracle.svg',
    description:
      'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Python',
    imageURL: '/python.svg',
    description:
      'Fique especialista em Python com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'Android',
    imageURL: '/android.svg',
    description:
      'Fique especialista em Pentest Mobile com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
  {
    title: 'CCNA Oracle',
    imageURL: '/cisco.svg',
    description:
      'Fique especialista em redes de computadores com os melhores profissionais do mercado',
    price: 250,
    slug: '/couses',
  },
];

const index: React.FC = ({ children }) => {
  return (
    <Layout>
      <div className="oval oval-bottom">
        <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-5 flex">
          <div className="float-left w-full">
            <h1 className="text-4xl font-bold my-6">Cursos</h1>
            <h6 className="font-bold my-3">Filtros</h6>
            <div className="flex w-full">
              <div className="relative my-3 w-full max-w-60">
                <button className="bg-gold text-white rounded-md w-12 h-12 flex justify-center items-center absolute left-0">
                  <SearchIcon className="w-6" />
                </button>
                <input
                  className="border-2 border-gray-300 rounded-md outline-none h-12 pl-14"
                  type="text"
                  placeholder="Pesquisar"
                  name="search"
                />
              </div>
              <div className="my-3 ml-3 w-full max-w-60">
                <Select
                  styles={colourStyles}
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                  placeholder="Categorias"
                />
              </div>
            </div>
          </div>
          <img className="float-right" src="/mascote.svg" alt="" />
        </section>
      </div>
      <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-wrap">
          {Courses.map((course, i) => {
            return (
              <div key={i} className="w-full md:w-1/2 lg:w-1/4 my-10">
                <div className="flex flex-col justify-center items-center px-2 h-full">
                  <img
                    className="w-full max-w-70"
                    src={course.imageURL}
                    alt="image"
                  />
                  <h3 className="text-lg font-semibold text-center my-5 ">
                    {course.title}
                  </h3>
                  <p className="font-medium text-center text-brown leading-6 mx-5 max-w-56 mb-2">
                    {course.description}
                  </p>
                  <h2 className="text-center text-brown font-bold mt-auto">
                    {Currency(course.price, 'pt-BR', 'BRL')}
                  </h2>
                  <AnimatedButton className="bg-gold font-poppins text-white text-bold rounded-md py-2 px-5 pointer-events-auto mt-3">
                    Comprar
                  </AnimatedButton>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default index;
