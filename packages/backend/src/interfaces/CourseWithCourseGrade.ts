import { Course } from "./Course";
import { CourseGrade } from "./CourseGrade";

export interface CourseAndCourseGrade {
  course: Course;
  courseGrade: CourseGrade[];
}

export interface CourseWithCourseGrade extends Course {
  courseGrade: CourseGrade[];
}
