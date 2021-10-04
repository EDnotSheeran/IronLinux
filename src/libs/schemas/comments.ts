import { Prisma } from '@prisma/client';
import * as yup from 'yup';

const config = {
  author: {
    max: 100,
  },
  job: {
    max: 100,
  },
  content: {
    max: 100,
  },
  rating: {
    min: 0,
    max: 5,
  },
};

const { author, content, job, rating } = config;

export const CommentSelect = Prisma.validator<Prisma.CommentSelect>()({
  id: true,
  author: true,
  avatar: true,
  job: true,
  content: true,
  rating: true,
  createdAt: true,
  updatedAt: true,
} as Prisma.CommentSelect);

export const WhereSchema = yup.object().shape({
  id: yup.string().uuid(),
  author: yup.string().max(author.max),
  job: yup.string().max(job.max),
  avatar: yup.string().url(),
  content: yup.string().max(content.max),
  rating: yup.number().min(rating.min).max(rating.max).integer(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  deleted: yup.boolean(),
});

export const OrderBySchema = yup.object().shape({
  id: yup.string().oneOf(['asc', 'desc']),
  author: yup.string().oneOf(['asc', 'desc']),
  job: yup.string().oneOf(['asc', 'desc']),
  avatar: yup.string().oneOf(['asc', 'desc']),
  content: yup.string().oneOf(['asc', 'desc']),
  rating: yup.string().oneOf(['asc', 'desc']),
  createdAt: yup.string().oneOf(['asc', 'desc']),
  updatedAt: yup.string().oneOf(['asc', 'desc']),
  deleted: yup.string().oneOf(['asc', 'desc']),
});

export const CursorSchema = yup
  .object()
  .shape({
    id: yup.string().uuid(),
  })
  .default(undefined);

export const DistinctSchema = yup.string().oneOf(Object.keys(CommentSelect));

export const FindManySchema = yup.object().shape({
  where: WhereSchema,
  orderBy: OrderBySchema,
  skip: yup.number().min(0),
  take: yup.number().min(0).default(15),
  cursor: CursorSchema,
  distinct: DistinctSchema,
});

export const FindUniqueSchema = yup.object().shape({
  id: yup.string().uuid().required(),
});

export const CreateSchema = yup.object().shape({
  author: yup.string().max(author.max).required(),
  job: yup.string().max(job.max).required(),
  avatar: yup.string().url(),
  content: yup.string().max(content.max).required(),
  rating: yup.number().min(rating.min).max(rating.max).integer().required(),
});

export const CreateManySchema = yup.array().of(CreateSchema);

export const UpdateSchema = yup.object().shape({
  author: yup.string().max(author.max),
  job: yup.string().max(job.max),
  avatar: yup.string().url().nullable(),
  content: yup.string().max(content.max),
  rating: yup.number().min(rating.min).max(rating.max).integer(),
});

export const UpdateManySchema = yup.object().shape({
  data: UpdateSchema,
  where: WhereSchema.default(undefined),
});

export const DeleteManySchema = yup.object().shape({
  where: WhereSchema.default(undefined),
});
