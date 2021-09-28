type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type User =
  | Omit<import('@prisma/client').User, 'hash' | 'salt' | 'deleted'> & {
      hash?: string;
      salt?: string;
      deleted?: boolean;
    };

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
