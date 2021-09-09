import { prisma, Prisma, PrismaClient } from "@prisma/client";
import { ErrorRequest } from "../classes/ErrorRequest";
import { User } from "../domains/User";
import { IUserRepository } from "./interfaces/IUserRepository";
export class UsersRepository implements IUserRepository {
  async getById(id: number): Promise<User> {
    const prisma = new PrismaClient();

    return prisma.user.findFirst({ where: { id } });
  }
  async getAll(): Promise<User[]> {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
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
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.user.delete({
      where: { id },
    });

    return true;
  }
}
