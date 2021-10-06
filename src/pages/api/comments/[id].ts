import nextConnect from 'next-connect';
import { Prisma } from '@prisma/client';
import prisma from '@libs/prisma';
import auth, { isAdmin } from '@middlewares/auth';
import {
  FindUniqueSchema,
  UpdateSchema,
  CommentSelect,
  CreateSchema,
} from '@libs/schemas/comments';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler
  .use(auth)
  .get(async (req, res) => {
    try {
      await FindUniqueSchema.validate(req.query);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const comment = await prisma.comment.findUnique({
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
      select: CommentSelect,
    });

    if (!comment) res.status(404).json({ error: ['not found'] });

    return res.json({ comment });
  })
  .use(isAdmin)
  .put(async (req, res) => {
    try {
      await FindUniqueSchema.validate(req.query);
      await CreateSchema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const comment = await prisma.comment.upsert({
      create: CreateSchema.cast(req.body, {
        stripUnknown: true,
      }) as Prisma.CommentCreateInput,
      update: CreateSchema.cast(req.body, {
        stripUnknown: true,
      }) as Prisma.CommentUpdateInput,
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
      select: CommentSelect,
    });

    return res.json({ comment });
  })
  .patch(async (req, res) => {
    try {
      await FindUniqueSchema.validate(req.query);
      await UpdateSchema.validate(req.body);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const exists = await prisma.comment.findUnique({
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
    });

    if (!exists) return res.status(404).json({ error: ['not found'] });

    const comment = await prisma.comment.update({
      data: UpdateSchema.cast(req.body, {
        stripUnknown: true,
      }) as Prisma.CommentUpdateInput,
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
      select: CommentSelect,
    });

    return res.json({ comment });
  })
  .delete(async (req, res) => {
    try {
      await FindUniqueSchema.validate(req.query);
    } catch (e) {
      return res.status(400).json({ error: (e as ValidationError).errors });
    }

    const exists = await prisma.comment.findUnique({
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
    });

    if (!exists) return res.status(404).json({ error: ['not found'] });

    const comment = await prisma.comment.delete({
      where: FindUniqueSchema.cast(req.query, { stripUnknown: true }),
      select: CommentSelect,
    });

    return res.status(204).end();
  });

export default handler;
