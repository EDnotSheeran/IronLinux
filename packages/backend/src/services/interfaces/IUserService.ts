import { User } from "../../interfaces/User";

export interface IUserService {
  create({
    name,
    email,
    password,
    description,
    active,
  }: User): Promise<Omit<User, "password">>;
  getAll(): Promise<Array<Omit<User, "password">>>;
  getByEmail(email: string): Promise<User>;
  getById(id: number): Promise<Omit<User, "password">>;
  delete(id: number): Promise<void>;
  inactiveUser(id: number): Promise<Omit<User, "password">>;
  update({
    name,
    email,
    password,
    description,
    active,
    id,
  }: User): Promise<Omit<User, "password">>;
}
