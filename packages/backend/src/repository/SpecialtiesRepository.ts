import { PrismaClient } from "@prisma/client";
import { Specialties } from "../interfaces/Specialties";
import { ISpecialtiesRepository } from "./interfaces/ISpecialtiesRepository";
export class SpecialtiesRepository implements ISpecialtiesRepository {
  async getById(id: number): Promise<Specialties> {
    const prisma = new PrismaClient();
    return prisma.specialties.findFirst({ where: { id } });
  }

  async getAll(): Promise<Specialties[]> {
    const prisma = new PrismaClient();

    return prisma.specialties.findMany();
  }

  async save(specialties: Specialties): Promise<Specialties> {
    const prisma = new PrismaClient();
    const courseCreated = prisma.specialties.create({
      data: specialties,
    });

    return courseCreated;
  }
  async update(specialties: Specialties): Promise<Specialties> {
    const prisma = new PrismaClient();
    const specialtiesUpdated = prisma.specialties.update({
      data: { ...specialties, updatedAt: new Date() },
      where: { id: specialties.id },
    });
    return specialtiesUpdated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.specialties.delete({
      where: { id },
    });
    return true;
  }
}
