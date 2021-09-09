import { PrismaClient } from "@prisma/client";
import { Course } from "../domains/Course";
import { CourseGrade } from "../domains/CourseGrade";
import { ICourseRepository } from "./interfaces/ICourseRepository";
export class CourseRepository implements ICourseRepository {
  getBySlug(slug: string): Promise<Course> {
    const prisma = new PrismaClient();
    return prisma.course.findFirst({
      where: { slug },
      include: { courseGrade: true },
    });
  }
  async getById(id: number): Promise<Course> {
    const prisma = new PrismaClient();

    return prisma.course.findFirst({
      where: { id },
      include: { courseGrade: true },
    });
  }
  async filterCourse(
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ): Promise<Course[]> {
    const prisma = new PrismaClient();
    return prisma.course.findMany({
      take: pageSize,
      skip: offset,
      orderBy,
    });
  }

  async count(): Promise<number> {
    const prisma = new PrismaClient();
    return prisma.course.count();
  }

  async save(
    {
      title,
      description,
      certified,
      course_hours,
      languageCourseId,
      levelCourseId,
      price,
      published,
      slug,
    }: Course,
    courseGrades: CourseGrade[]
  ): Promise<Course> {
    const prisma = new PrismaClient();
    const courseCreated = await prisma.course.create({
      data: {
        title,
        description,
        certified,
        course_hours,
        languageCourseId,
        levelCourseId,
        price,
        published,
        slug,
        courseGrade: { create: courseGrades },
      },
      include: { courseGrade: true },
    });

    const courseExist = this.getById(courseCreated.id);
    return courseExist;
  }
  async update(course: Course): Promise<Course> {
    const prisma = new PrismaClient();
    const courseUpdated = prisma.course.update({
      data: { ...course, updatedAt: new Date() },
      where: { id: course.id },
    });
    return courseUpdated;
  }
  async delete(id: number): Promise<boolean> {
    const prisma = new PrismaClient();
    await prisma.$transaction([
      prisma.courseGrade.deleteMany({
        where: {
          courseId: id,
        },
      }),
      prisma.course.delete({
        where: { id },
      }),
    ]);
    return true;
  }
}
