import React from 'react';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { SearchIcon } from '@heroicons/react/solid';
import { Currency } from '@helpers';
import { Layout, Select, Button, Pagination } from '@components';

const Courses: React.FC<CoursesPageProps> = ({ courses = [] }) => {
  return (
    <Layout>
      <div className="oval-bg">
        <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-5 pt-0 flex">
          <div className="float-left w-full">
            <h1 className="text-4xl font-bold my-6">Cursos</h1>
            <h6 className="font-bold my-3">Filtros</h6>
            <div className="flex flex-wrap w-full">
              <div className="relative my-3 w-full max-w-60 mr-3">
                <button className="bg-gold text-white rounded-md w-12 h-12 flex justify-center items-center absolute left-0">
                  <SearchIcon className="w-6" />
                </button>
                <input
                  className="w-full border-2 border-gray-300 rounded-md outline-none h-12 pl-14"
                  type="text"
                  placeholder="Pesquisar"
                  name="search"
                />
              </div>
              <div className="my-3 w-full max-w-60">
                <Select
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
          <img
            className="float-right hidden lg:block"
            src="/mascote.svg"
            alt=""
          />
        </section>
      </div>
      <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-wrap">
          {courses.map((course, i) => {
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
                  <Button className="bg-gold font-poppins text-white text-bold rounded-md py-2 px-5 pointer-events-auto mt-3">
                    Comprar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <Pagination pages={4} activePage={1} />
        </div>
      </section>
      <div className="oval-bg-reverse h-60"></div>
    </Layout>
  );
};

export default Courses;

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<CoursesPageProps>> => {
  const res = await fetch('http://localhost:3000/api/courses');
  const courses = await res.json();
  return {
    props: {
      courses,
    },
  };
};
