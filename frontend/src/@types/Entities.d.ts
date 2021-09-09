type Post = {
  title: string;
  imageURL: string;
  author: string;
  publishedAt: string;
  URL: string;
};

type PostComment = {
  content: string;
  stars: number;
  author: {
    avatarURL: string;
    name: string;
    job: string;
  };
};

type Course = {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  slug: string;
};

type Speciality = {
  name: string;
  description: string;
  imageURL: string;
};
