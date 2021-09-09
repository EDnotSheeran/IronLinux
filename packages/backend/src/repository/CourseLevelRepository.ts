import { PrismaClient } from "@prisma/client";
import { CourseLevel } from "../domains/CourseLevel";
import { ICourseLevelRepository } from "./interfaces/ICourseLevelRepository";
export class CourseLevelRepository implements ICourseLevelRepository {
  async getById(id: number): Promise<CourseLevel> {
    const prisma = new PrismaClient();
    return prisma.courseLevel.findFirst({ where: { id } });
  }

  async getAll(): Promise<CourseLevel[]> {
    const prisma = new PrismaClient();

    return prisma.courseLevel.findMany();
  }

  async save(courseLevel: CourseLevel): Promise<CourseLevel> {
    const prisma = new PrismaClient();
    const courseCreated = prisma.courseLevel.create({
      data: courseLevel,
    });

    return courseCreated;
  }
  async update(courseLevel: CourseLevel): Promise<CourseLevel> {
    const prisma = new PrismaClient();
    const courseLevelUpdated = prisma.courseLevel.update({
      data: courseLevel,
      where: { id: courseLevel.id },
    });
    return courseLevelUpdated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    console.log(id);
    await prisma.courseLevel.delete({ where: { id } });

    return true;
  }
}
