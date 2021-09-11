import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { ICourseRepository } from "../repository/interfaces/ICourseRepository";
import { CourseRepository } from "../repository/CourseRepository";
import { CourseWithCourseGrade } from "../interfaces/CourseWithCourseGrade";
import { CourseLanguageService } from "./CourseLanguageService";
import { CourseLevelService } from "./CourseLevelService";
import { PaginationUtils } from "../utils/PaginationUtils";
import { ICourseService } from "./interfaces/ICourseService";
dotenv.config();
class CourseService implements ICourseService {
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

  async create(course: CourseWithCourseGrade): Promise<CourseWithCourseGrade> {
    await this.courseLevelService.getById(course.levelCourseId);
    await this.courseLanguageService.getById(course.languageCourseId);
    const courseSlugExists = await this.courseRepository.getBySlug(course.slug);
    if (courseSlugExists || !course.slug) {
      throw new ErrorRequest(
        "Não é possível criar um curso com esta abreviação, por favor tente outro."
      );
    }

    const courseCreated = await this.courseRepository.save(
      course,
      course.courseGrade
    );

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

  async getById(id: number): Promise<CourseWithCourseGrade> {
    const Course = await this.courseRepository.getById(id);
    if (!Course) {
      throw new ErrorRequest("Curso não encontrado", 404);
    }
    return Course;
  }

  async getBySlug(slug: string): Promise<CourseWithCourseGrade> {
    const Course = await this.courseRepository.getBySlug(slug);
    if (!Course) {
      throw new ErrorRequest("Curso não encontrado", 404);
    }
    return Course;
  }

  async delete(id: number): Promise<boolean> {
    await this.getById(id);
    this.courseRepository.delete(id);

    return true;
  }

  async update(course: CourseWithCourseGrade): Promise<CourseWithCourseGrade> {
    await this.getById(course.id);
    const courseSlugExists = await this.courseRepository.getBySlug(course.slug);

    if (
      (courseSlugExists && courseSlugExists.id != course.id) ||
      !course.slug
    ) {
      throw new ErrorRequest(
        "Não é possível criar um curso com esta abreviação, por favor tente outro."
      );
    }

    const courseUpdated = this.courseRepository.update(
      course,
      course.courseGrade
    );

    return courseUpdated;
  }

  async inactiveCourse(id: number, published: boolean) {
    const courseExisted = await this.getById(id);

    const course = this.courseRepository.inactive({
      ...courseExisted,
      published,
    });

    return course;
  }
}

export { CourseService };
