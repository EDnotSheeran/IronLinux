import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { ICourseRepository } from "../repository/interfaces/ICourseRepository";
import { CourseRepository } from "../repository/CourseRepository";
import { Course } from "../domains/Course";
import { CourseWithCourseGrade } from "../domains/CourseWithCourseGrade";
import { CourseLanguageService } from "./CourseLanguageService";
import { CourseLevelService } from "./CourseLevelService";
import { PaginationUtils } from "../utils/PaginationUtils";
dotenv.config();
class CourseService {
  private courseRepository: ICourseRepository;
  private courseLanguageService;
  private courseLevelService;
  private paginationUtils;

  constructor() {
    this.courseRepository = new CourseRepository();
    this.courseLanguageService = new CourseLanguageService();
    this.courseLevelService = new CourseLevelService();
    this.paginationUtils = new PaginationUtils();
  }

  async create({ course, courseGrade }: CourseWithCourseGrade) {
    await this.courseLevelService.getById(course.levelCourseId);
    await this.courseLanguageService.getById(course.languageCourseId);
    const courseSlugExists = await this.courseRepository.getBySlug(course.slug);
    if (courseSlugExists) {
      throw new ErrorRequest(
        "Não é possível criar um curso com esta abreviação, por favor tente outro."
      );
    }

    const courseCreated = await this.courseRepository.save(course, courseGrade);

    return courseCreated;
  }

  async filterCourses(
    pageSize?: number,
    page?: number,
    sort?: string,
    sortField?: string
  ) {
    const { results, currentPage, totalPages, totalRecords } =
      await this.paginationUtils.pagination(
        pageSize,
        page,
        sort,
        sortField,
        "Course"
      );

    return {
      course: results,
      totalPages,
      totalRecords,
      currentPage,
    };
  }

  async getById(id: number) {
    const Course = await this.courseRepository.getById(id);
    if (!Course) {
      throw new ErrorRequest("Curso não encontrado", 404);
    }
    return Course;
  }

  async getBySlug(slug: string) {
    const Course = await this.courseRepository.getBySlug(slug);
    if (!Course) {
      throw new ErrorRequest("Curso não encontrado", 404);
    }
    return Course;
  }

  async delete(id: number) {
    await this.getById(id);
    this.courseRepository.delete(id);

    return true;
  }

  async update({
    id,
    title,
    description,
    certified,
    course_hours,
    languageCourseId,
    levelCourseId,
    price,
    published,
    slug,
  }: Course) {
    await this.getById(id);
    const courseSlugExists = await this.courseRepository.getBySlug(slug);

    if (courseSlugExists && courseSlugExists.id != id) {
      throw new ErrorRequest(
        "Não é possível criar um curso com esta abreviação, por favor tente outro."
      );
    }

    const course = this.courseRepository.update({
      id,
      title,
      description,
      certified,
      course_hours,
      languageCourseId,
      levelCourseId,
      price,
      published,
      slug,
      updatedAt: new Date(),
    });

    return course;
  }

  async inactiveCourse(id: number, published: boolean) {
    const courseExisted = await this.getById(id);

    const course = this.courseRepository.update({
      ...courseExisted,
      published,
    });

    return course;
  }
}

export { CourseService };
