import { Course } from "../../domains/Course";
import { CourseGrade } from "../../domains/CourseGrade";
export interface ICourseRepository {
  save(course: Course, courseGrade: CourseGrade[]): Promise<Course>;
  update(course: Course): Promise<Course>;
  delete(id: number): Promise<boolean>;
  filterCourse(
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ): Promise<Course[]>;
  getById(id: number): Promise<Course>;
  getBySlug(slug: string): Promise<Course>;
  count(): Promise<number>;
}
