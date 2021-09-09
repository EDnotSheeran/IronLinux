import { Course } from "./Course";
import { CourseGrade } from "./CourseGrade";

export interface CourseWithCourseGrade {
  course: Course;
  courseGrade: CourseGrade[];
}
