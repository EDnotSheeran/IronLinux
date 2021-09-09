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
