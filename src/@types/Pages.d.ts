type NextPage<T = {}> = import('next').NextPage<T> & {
  getLayout?: (page: import('react').ReactElement) => import('react').ReactNode;
};

type AppProps = import('next').AppProps & {
  Component: NextPage;
};

type Course = {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  slug: string;
};
