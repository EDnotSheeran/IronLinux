import { NextApiHandler } from 'next';

export const specialities = [
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
] as Speciality[];

const SpecialitiesRoute: NextApiHandler = (req, res) => {
  return res.json(specialities);
};

export default SpecialitiesRoute;
