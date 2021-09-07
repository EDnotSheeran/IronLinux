import React from 'react';
import { Button } from '@components/index';

const Footer: React.FC = ({ children }) => {
  return (
    <footer>
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto border-t-2 pt-7 border-b-2 pb-7 flex flex-wrap justify-start pl-10 md:grid md:grid-cols-2 lg:grid-cols-3 place-content-center">
        <ul className="font-poppins">
          <li className="mb-10">
            <img className="" src="/iron-logo.svg" alt="iron-logo.svg" />
          </li>
          <li className="my-1">
            <a href="#">Home</a>
          </li>
          <li className="my-1">
            <a href="#">Sobre Nós</a>
          </li>
          <li className="my-1">
            <a href="#">Blog</a>
          </li>
          <li className="my-1">
            <a href="#">Termos de Serviço</a>
          </li>
        </ul>
        <ul className="w-full md:mx-16 font-poppins">
          <li className="font-bold mt-5 mb-9">Serviços</li>
          <li className="my-1">
            <a href="#">Cursos</a>
          </li>
          <li className="my-1">
            <a href="#">Consultorias</a>
          </li>
          <li className="my-1">
            <a href="#">Treinamentos</a>
          </li>
        </ul>
        <div className="font-poppins pt-10 lg:pt-5">
          <p className="font-bold">Conheça nossa NewsLetter</p>
          <input
            className="border-2 rounded-md border-blue-bluesh p-3 w-72 placeholder-current font-extralight mt-1 mb-4"
            type="text"
            placeholder="Digite seu e-mail..."
          />
          <Button className="bg-gold text-white rounded-md py-3 px-3 rounded-t rounded-b">
            Receba Novidades
          </Button>
          <p className="text-grey-500 font-bold my-3">Redes Sociais</p>
          <ul className="flex mt-6">
            <li className="mr-4">
              <a href="#">
                <img src="/icons/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <img src="/icons/instagram.svg" alt="facebook" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <img src="/icons/linkedin.svg" alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="font-poppins text-center font-extralight mt-1 mb-10">
        Todos os direitos reservados 2021-2021©
      </p>
    </footer>
  );
};

export default Footer;
