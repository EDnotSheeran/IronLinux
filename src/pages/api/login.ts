import nextConnect from 'next-connect';
import auth from '@middlewares/auth';
import passport from '@libs/passport';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  res.status(200).json({ user: req.user });
});

export default handler;
