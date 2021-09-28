import nextConnect, { ErrorHandler } from 'next-connect';
import { NextApiResponse } from 'next';
import auth from '@middlewares/auth';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
  res.status(500).json({ error: err.toString() });
};

const handler = nextConnect<NextApiRequest, NextApiResponse>({ onError });

handler.use(auth).get((req, res) => {
  res.status(200).send('dasd');
});

export default handler;

prisma.post.create({
  data: {
    title: 'oi',
    slug: 'das',
    ogImage: '',
    coverImage: '',
    User: {
      connect: { id: 'da' },
    },
  },
});
