import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import auth, { isAuthenticated } from '@middlewares/auth';
import { ValidationError } from 'yup';
import { Prisma } from '@prisma/client';
import prisma from '@libs/prisma';
import {
  CommentSelect,
  CreateManySchema,
  CreateSchema,
  FindManySchema,
  UpdateManySchema,
  DeleteManySchema,
} from '@libs/schemas/comments';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler
  .use(auth)
  .get(async (req, res) => {
    try {
      await FindManySchema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const { orderBy, distinct, ...otherArgs } = FindManySchema.cast(req.body, {
      stripUnknown: true,
    });

    const comments = await prisma.comment.findMany({
      select: CommentSelect,
      ...otherArgs,
      orderBy: orderBy as Prisma.CommentOrderByWithRelationInput,
      distinct: distinct as Prisma.Enumerable<Prisma.CommentScalarFieldEnum>,
    });

    return res.json({ count: comments.length, comments });
  })
  .use(isAuthenticated)
  .post(async (req, res) => {
    const isArray = Array.isArray(req.body);
    const schema = isArray ? CreateManySchema : CreateSchema;

    try {
      await schema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    if (!isArray) {
      const comment = await prisma.comment.create({
        data: schema.cast(req.body, {
          stripUnknown: true,
        }) as Prisma.CommentCreateInput,
        select: CommentSelect,
      });

      return res.json({ comment });
    }

    //https:github.com/prisma/prisma/issues/8131
    const comments = await prisma.comment.createMany({
      data: schema.cast(req.body, {
        stripUnknown: true,
      }) as Prisma.CommentCreateInput,
      skipDuplicates: false,
    });

    return res.json({ comments });
  })
  .patch(async (req, res) => {
    try {
      await UpdateManySchema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const { data, where } = UpdateManySchema.cast(req.body, {
      stripUnknown: true,
    });

    const comment = await prisma.comment.updateMany({
      data: data as Prisma.CommentUpdateInput,
      where: where,
    });

    return res.json({ comment });
  })
  .delete(async (req, res) => {
    try {
      await DeleteManySchema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const comment = await prisma.comment.deleteMany({
      ...DeleteManySchema.cast(req.body, {
        stripUnknown: true,
      }),
    });

    return res.json({ comment });
  });

export default handler;
