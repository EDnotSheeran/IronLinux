import { CourseWithCourseGrade } from "src/interfaces/CourseWithCourseGrade";
import { Course } from "../../interfaces/Course";
import { CourseGrade } from "../../interfaces/CourseGrade";
export interface ICourseRepository {
  save(
    course: Course,
    courseGrade: CourseGrade[]
  ): Promise<CourseWithCourseGrade>;
  update(
    course: Course,
    courseGrade: CourseGrade[]
  ): Promise<CourseWithCourseGrade>;
  delete(id: number): Promise<boolean>;
  filterCourse(
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ): Promise<Course[]>;
  getById(id: number): Promise<CourseWithCourseGrade>;
  getBySlug(slug: string): Promise<CourseWithCourseGrade>;
  count(): Promise<number>;
  inactive(course: Course): Promise<CourseWithCourseGrade>;
}
