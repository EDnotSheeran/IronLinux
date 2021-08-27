import React from 'react';

const ContactSection: React.FC = ({ children }) => {
  return (
    <section className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-5 lg:flex lg:flex-row-reverse">
      <div className="px-6 sm:px-10 lg:w-6/12">
        <h3 className="text-4xl pb-6 font-bold">Fale Conosco</h3>
        <div className="text-xl mb-5 ">
          <label className="block text-xl" htmlFor="name">
            Seu Nome
          </label>
          <input
            className="border-2 rounded-md p-2 w-full"
            name="name"
            type="text"
          />
        </div>
        <div className="text-xl mb-5">
          <label className="block text-xl" htmlFor="email">
            Seu E-Mail
          </label>
          <input
            className="border-2 rounded-md p-2 w-full"
            name="email"
            type="text"
          />
        </div>
        <div className="text-xl mb-5">
          <label className="block text-xl" htmlFor="subject">
            Assunto
          </label>
          <input
            className="border-2 rounded-md p-2 w-full"
            name="subject"
            type="text"
          />
        </div>
        <div className="text-xl mb-5">
          <label className="block text-xl" htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="border-2 rounded-md p-2 w-full"
            rows={6}
            name="message"
          />
        </div>
      </div>
      <div className="px-6 sm:px-10 lg:w-6/12">
        <img src="/telemarketing.svg" alt="Fale Conosco" />
      </div>
    </section>
  );
};

export default ContactSection;
