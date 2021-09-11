import { PrismaClient } from "@prisma/client";
import { ErrorRequest } from "../classes/ErrorRequest";
import { User } from "../interfaces/User";
import { IUserRepository } from "./interfaces/IUserRepository";
export class UsersRepository implements IUserRepository {
  async getById(id: number): Promise<Omit<User, "password">> {
    const prisma = new PrismaClient();

    return prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        password: false,
        name: true,
        email: true,
        description: true,
        courses: true,
        active: true,
      },
    });
  }
  async getAll(): Promise<Array<Omit<User, "password">>> {
    const prisma = new PrismaClient();
    return prisma.user.findMany({
      select: {
        id: true,
        password: false,
        name: true,
        email: true,
        description: true,
        courses: true,
        active: true,
      },
    });
  }
  async getByEmail(email: string): Promise<User> {
    const prisma = new PrismaClient();
    return prisma.user.findFirst({ where: { email } });
  }

  async save(user: User): Promise<User> {
    const prisma = new PrismaClient();
    const userCreated = prisma.user.create({ data: user });
    return userCreated;
  }
  async update(user: User): Promise<User> {
    const prisma = new PrismaClient();
    const userCreated = prisma.user.update({
      data: user,
      where: { id: user.id },
    });
    return userCreated;
  }

  async inactive(id: number): Promise<User> {
    const prisma = new PrismaClient();
    const userCreated = prisma.user.update({
      data: { active: false },
      where: { id },
    });
    return userCreated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.user.delete({
      where: { id },
    });

    return true;
  }
}
