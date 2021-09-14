import { CourseGrade } from "src/interfaces/CourseGrade";
import { Course } from "../../interfaces/Course";
import {
  CourseAndCourseGrade,
  CourseWithCourseGrade,
} from "../../interfaces/CourseWithCourseGrade";

export interface TypeFilterCourseService {
  course: Course[];
  totalPages;
  totalRecords;
  currentPage;
}

export interface ICourseService {
  create(course: CourseWithCourseGrade): Promise<CourseWithCourseGrade>;
  filterCourses(
    pageSize?: number,
    page?: number,
    sort?: string,
    sortField?: string
  ): Promise<TypeFilterCourseService>;
  getById(id: number): Promise<CourseWithCourseGrade>;
  getBySlug(slug: string): Promise<CourseWithCourseGrade>;
  delete(id: number): Promise<boolean>;
  update(course: CourseWithCourseGrade): Promise<CourseWithCourseGrade>;
  inactiveCourse(id: number, published: boolean): Promise<Course>;
}
