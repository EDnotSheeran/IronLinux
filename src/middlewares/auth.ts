import nextConnect from 'next-connect';
import passport from '@libs/passport';
import session from '@libs/session';
import { NextApiResponse } from 'next';

const auth = nextConnect<NextApiRequest, NextApiResponse>()
  .use(
    session({
      name: 'sess',
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    })
  )
  .use(passport.initialize())
  .use(passport.session());

export default auth;
