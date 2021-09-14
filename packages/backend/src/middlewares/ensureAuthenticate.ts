import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

interface VerifyJsonWebToken {
  sub: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const AuthToken = request.headers.authorization;
    const [bearer, token] = AuthToken.split(" ");

    if (!token || bearer != "Bearer") {
      return response.status(401).json({
        error: "Unable to authenticate user. Please try to login again!",
      });
    }

    const { sub } = verify(token, process.env.SECRET_KEY) as VerifyJsonWebToken;
    request.user_id = sub;
    return next();
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error validating access permissions!" });
  }
}
