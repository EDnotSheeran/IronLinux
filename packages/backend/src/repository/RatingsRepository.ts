import { PrismaClient } from "@prisma/client";
import { Ratings } from "../interfaces/Ratings";
import { IRatingsRepository } from "./interfaces/IRatingsRepository";
export class RatingsRepository implements IRatingsRepository {
  async getById(id: number): Promise<Ratings> {
    const prisma = new PrismaClient();

    return prisma.ratings.findFirst({ where: { id } });
  }
  async filterRatings(
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ): Promise<Ratings[]> {
    const prisma = new PrismaClient();
    return prisma.ratings.findMany({
      take: pageSize,
      skip: offset,
      orderBy: orderBy,
    });
  }

  async count(): Promise<number> {
    const prisma = new PrismaClient();
    return prisma.ratings.count();
  }

  async save(ratings: Ratings): Promise<Ratings> {
    const prisma = new PrismaClient();
    const ratingsCreated = prisma.ratings.create({ data: ratings });
    return ratingsCreated;
  }
  async update(ratings: Ratings): Promise<Ratings> {
    const prisma = new PrismaClient();
    const ratingsCreated = prisma.ratings.update({
      data: { ...ratings, updatedAt: new Date() },
      where: { id: ratings.id },
    });
    return ratingsCreated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.ratings.delete({
      where: { id },
    });

    return true;
  }
}
