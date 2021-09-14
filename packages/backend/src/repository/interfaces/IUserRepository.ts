import { User } from "../../interfaces/User";
export interface IUserRepository {
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<Array<Omit<User, "password">>>;
  getById(id: number): Promise<Omit<User, "password">>;
  getByEmail(email: string): Promise<User>;
  inactive(id: number): Promise<User>;
}
