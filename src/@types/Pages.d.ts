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
