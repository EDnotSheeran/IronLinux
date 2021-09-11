import { User } from "../../interfaces/User";
export interface IUserRepository {
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  getByEmail(email: string): Promise<User>;
}
