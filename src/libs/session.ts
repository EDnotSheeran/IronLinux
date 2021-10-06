import { parse, serialize, CookieSerializeOptions } from 'cookie';
import { NextHandler } from 'next-connect';
import { createLoginSession, getLoginSession } from './auth';

function parseCookies(req: NextApiRequest) {
  if (req.cookies) return req.cookies;

  const cookie = req.headers?.cookie;
  return parse(cookie || '');
}

export default function session({
  name,
  secret,
  cookie: cookieOpts,
}: {
  name: string;
  secret?: string;
  cookie: CookieSerializeOptions;
}) {
  return async (
    req: NextApiRequest,
    res: NextApiResponseCustomEnd,
    next: NextHandler
  ) => {
    if (!secret) throw new Error('TOKEN_SECRET is missing at .env');
    const cookies = parseCookies(req);
    const token = cookies[name];
    let unsealed = {};

    if (token) {
      try {
        unsealed = await getLoginSession(token, secret);
      } catch (e) {
        console.error(e);
      }
    }

    req.session = unsealed;

    const oldEnd = res.end;

    res.end = async function resEndProxy(
      ...args: [
        chunk: any,
        encoding: BufferEncoding,
        cb?: (() => void) | undefined
      ]
    ) {
      if (res.finished || res.writableEnded || res.headersSent) return;
      if (cookieOpts.maxAge) {
        req.session.maxAge = cookieOpts.maxAge;
      }
      const token = await createLoginSession(req.session, secret);

      res.setHeader('Set-Cookie', serialize(name, token, cookieOpts));
      oldEnd.apply(this, args);
    };

    next();
  };
}
