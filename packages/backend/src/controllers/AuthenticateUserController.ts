import { Request, Response } from "express";
import { AuthenticateUser } from "../interfaces/AuthenticateUser";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password }: AuthenticateUser = request.body;
    const authenticateUserService = new AuthenticateUserService();

    const authenticate = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json(authenticate);
  }
}

export { AuthenticateUserController };
