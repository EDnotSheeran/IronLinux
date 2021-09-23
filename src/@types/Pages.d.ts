type NextPage<T = {}> = import('next').NextPage<T> & {
  getLayout?: (page: import('react').ReactElement) => import('react').ReactNode;
};

type AppProps = import('next').AppProps & {
  Component: NextPage;
};

type HomePageProps = {
  recentPosts: Post[];
  comments: PostComment[];
  courses: Course[];
  specialities: Speciality[];
  sections: {
    main: {
      heading: {
        value: string;
        highlight: string[];
      };
      paragraph: string;
      imageURL: string;
    };
  };
};

type Course = {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  slug: string;
};

type CoursesPageProps = {
  courses: Course[];
};
