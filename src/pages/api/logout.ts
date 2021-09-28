import nextConnect from 'next-connect';
import auth from '@middlewares/auth';
import { NextApiResponse } from 'next';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(auth).get((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;
