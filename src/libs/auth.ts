import Iron from '@hapi/iron';
import crypto from 'crypto';
import { User } from '@prisma/client';

export async function createLoginSession(
  session: object,
  secret: Iron.Password | Iron.password.Secret | Iron.password.Specific
) {
  const createdAt = Date.now();
  const obj = { ...session, createdAt };
  const token = await Iron.seal(obj, secret, Iron.defaults);

  return token;
}

export async function getLoginSession(
  token: string,
  secret: Iron.Password | Iron.password.Hash
) {
  const session = await Iron.unseal(token, secret, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  if (session.maxAge && Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session;
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');

  return { hash, salt };
}

export function validatePassword(user: User, inputPassword: crypto.BinaryLike) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
