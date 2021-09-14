import { PrismaClient } from "@prisma/client";
import { Course } from "../interfaces/Course";
import { CourseLanguage } from "../interfaces/CourseLanguage";
import { ICourseLanguageRepository } from "./interfaces/ICourseLanguageRepository";
export class CourseLanguageRepository implements ICourseLanguageRepository {
  async getById(id: number): Promise<CourseLanguage> {
    const prisma = new PrismaClient();
    return prisma.courseLanguage.findFirst({ where: { id } });
  }

  async getAll(): Promise<CourseLanguage[]> {
    const prisma = new PrismaClient();

    return prisma.courseLanguage.findMany();
  }

  async save(courseLanguage: CourseLanguage): Promise<CourseLanguage> {
    const prisma = new PrismaClient();
    const courseCreated = prisma.courseLanguage.create({
      data: courseLanguage,
    });

    return courseCreated;
  }
  async update(courseLanguage: CourseLanguage): Promise<CourseLanguage> {
    const prisma = new PrismaClient();
    const courseLanguageUpdated = prisma.courseLanguage.update({
      data: courseLanguage,
      where: { id: courseLanguage.id },
    });
    return courseLanguageUpdated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.courseLanguage.delete({
      where: { id },
    });
    return true;
  }
}
