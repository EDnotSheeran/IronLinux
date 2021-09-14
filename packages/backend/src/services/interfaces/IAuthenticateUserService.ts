import { AuthenticateUser } from "../../interfaces/AuthenticateUser";

export interface ResponseLogin {
  token: string;
  expiresIn: string;
}
export interface IAuthenticateUserService {
  execute({ email, password }: AuthenticateUser): Promise<ResponseLogin>;
}
