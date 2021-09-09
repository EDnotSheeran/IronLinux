import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { IUserRepository } from "../repository/interfaces/IUserRepository";
import { UsersRepository } from "../repository/UserRepository";
import { User } from "../domains/User";
import { hash } from "bcryptjs";
dotenv.config();
class UserService {
  private usersRepository: IUserRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async create({ name, email, password, description, active }: User) {
    const userAlreadyExists = await this.usersRepository.getByEmail(email);
    if (!email) {
      throw new ErrorRequest("Email Incorret");
    }

    if (userAlreadyExists) {
      throw new ErrorRequest("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    const userCreated = await this.usersRepository.save({
      name,
      email,
      description,
      password: passwordHash,
      active,
    });

    delete userCreated.password;
    return userCreated;
  }

  async getAll() {
    const user = await this.usersRepository.getAll();
    if (!user) {
      throw new ErrorRequest("Usuário não encontrado", 404);
    }
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.getByEmail(email);
    if (!user) {
      throw new ErrorRequest("Usuário não encontrado", 404);
    }
    return user;
  }
  async getById(id: number) {
    const user = await this.usersRepository.getById(id);
    if (!user) {
      throw new ErrorRequest("Usuário não encontrado", 404);
    }
    return user;
  }

  async delete(id: number) {
    await this.getById(id);
    this.usersRepository.delete(id);

    return true;
  }

  async inactiveUser(id: number) {
    const userAlreadyExists = await this.getById(id);
    userAlreadyExists.active = false;
    const user = this.usersRepository.update(userAlreadyExists);
    return user;
  }

  async update({ name, email, password, description, active, id }: User) {
    await this.getById(id);

    const user = this.usersRepository.update({
      name,
      email,
      password,
      description,
      active,
      id,
    });

    return user;
  }
}

export { UserService };
