import { ErrorRequest } from "../classes/ErrorRequest";
import { AuthenticateUser } from "../domains/AuthenticateUser";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import * as dotenv from "dotenv";
import { IUserRepository } from "../repository/interfaces/IUserRepository";
import { UsersRepository } from "../repository/UserRepository";
dotenv.config();
class AuthenticateUserService {
  private usersRepository: IUserRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute({ email, password }: AuthenticateUser) {
    const userExists = await this.usersRepository.getByEmail(email);
    if (!userExists) {
      throw new ErrorRequest("Email/Password incorret!");
    }
    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new ErrorRequest("Email/Password incorret!");
    }

    const token = sign(
      {
        email: userExists.email,
      },
      process.env.SECRET_KEY as string,
      {
        subject: userExists.id.toString(),
        expiresIn: "1d",
      }
    );
    return {
      token,
      expiresIn: "",
    };
  }
}

export { AuthenticateUserService };
