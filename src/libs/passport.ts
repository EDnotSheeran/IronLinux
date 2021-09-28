import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import prisma from '@lib/prisma';
import { validatePassword } from '@lib/auth';

passport.serializeUser<string>((user, done) => {
  // serialize the user id into session
  done(null, (user as User).id);
});

passport.deserializeUser(
  async (
    req: NextApiRequest,
    id: string,
    done: (err: any, user?: false | User | null) => void
  ) => {
    // deserialize the user id back into user object
    const user: User | null = await prisma.user.findUnique({ where: { id } });
    delete user?.salt;
    delete user?.hash;
    delete user?.deleted;
    done(null, user);
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // Looks up for the user
      const user = await prisma.user.findFirst({
        where: { email, deleted: false },
      });
      // Verifies if user exists and if the password is valid
      if (!user || !validatePassword(user, password)) {
        done(null, null);
      } else {
        delete (user as User).hash;
        delete (user as User).salt;
        delete (user as User).deleted;
        done(null, user);
      }
    }
  )
);

export default passport;
