import nextConnect, { NextHandler } from 'next-connect';
import passport from '@libs/passport';
import session from '@libs/session';
import { NextApiResponse } from 'next';

const auth = nextConnect<NextApiRequest, NextApiResponse>()
  .use(
    session({
      name: process.env.AUTH_SESSION_NAME || 'sess',
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

export async function isAuthenticated(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('unauthenticated');
  }
}

export async function isAdmin(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  if (req.isAuthenticated()) {
    if (req.user.role === 'Admin') {
      next();
    } else {
      res.status(403).send('forbiden');
    }
  } else {
    res.status(401).send('unauthenticated');
  }
}
