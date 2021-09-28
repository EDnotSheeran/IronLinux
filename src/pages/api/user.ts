import nextConnect from 'next-connect';
import auth from '@middlewares/auth';
import prisma from '@libs/prisma';
import { hashPassword } from '@libs/auth';
import { NextApiResponse } from 'next';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler
  .use(auth)
  .get(async (req, res) => {
    return res.json({
      user: {
        ...req.user,
        hash: undefined,
        salt: undefined,
        deleted: undefined,
      },
    });
  })
  .post(async (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) return res.status(400).end();

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return res.status(409).end();

    const { hash, salt } = hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hash,
        salt,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    req.logIn(user, (err: Error) => {
      if (err) throw err;
      // Log the signed up user in
      return res.status(201).json({
        user,
      });
    });
  })
  .use((req, res, next) => {
    // handlers after this (PUT, DELETE) all require an authenticated user
    // This middleware to check if user is authenticated before continuing
    if (!req.user) {
      res.status(401).send('unauthenticated');
    } else {
      next();
    }
  })
  .put(async (req, res) => {
    const { name } = req.body;
    const user = await prisma.user.update({
      data: {
        name,
      },
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json({ user });
  })
  .delete(async (req, res) => {
    await prisma.user.update({
      data: { deleted: true },
      where: { id: req.user.id },
    });
    req.logOut();
    res.status(204).end();
  });

export default handler;
