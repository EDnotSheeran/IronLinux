import { NextApiHandler } from 'next';

export const courses = [
  {
    title: 'Oracle',
    imageURL: '/oracle.svg',
    description:
      'Fique especialista em banco de dados com os melhores profissionais do mercado',
    price: 250,
    slug: 'courses',
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
] as Course[];

const CoursesRoute: NextApiHandler = (req, res) => {
  return res.json(courses);
};

export default CoursesRoute;
