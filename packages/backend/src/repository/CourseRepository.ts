import { PrismaClient } from "@prisma/client";
import { CourseWithCourseGrade } from "src/interfaces/CourseWithCourseGrade";
import { Course } from "../interfaces/Course";
import { CourseGrade } from "../interfaces/CourseGrade";
import { ICourseRepository } from "./interfaces/ICourseRepository";
export class CourseRepository implements ICourseRepository {
  getBySlug(slug: string): Promise<CourseWithCourseGrade> {
    const prisma = new PrismaClient();
    return prisma.course.findFirst({
      where: { slug },
      include: { courseGrade: true },
    });
  }
  async getById(id: number): Promise<CourseWithCourseGrade> {
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
  ): Promise<CourseWithCourseGrade> {
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
  async update(
    course: Course,
    courseGrade: CourseGrade
  ): Promise<CourseWithCourseGrade> {
    const prisma = new PrismaClient();

    const courses = await prisma.course.update({
      data: {
        ...course,
        updatedAt: new Date(),
        courseGrade: {
          deleteMany: {
            courseId: course.id,
          },
          createMany: { data: courseGrade },
        },
      },
      where: { id: course.id },
      include: { courseGrade: true },
    });

    return courses;
  }

  async inactive(course: Course): Promise<CourseWithCourseGrade> {
    const prisma = new PrismaClient();
    const courses = await prisma.course.update({
      data: {
        ...course,
        updatedAt: new Date(),
      },
      where: { id: course.id },
      include: { courseGrade: true },
    });

    return courses;
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
