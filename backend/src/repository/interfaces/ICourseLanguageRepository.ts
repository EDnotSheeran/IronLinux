import { Course } from "../../domains/Course";
import { CourseLanguage } from "../../domains/CourseLanguage";
export interface ICourseLanguageRepository {
  save(courseLanguage: CourseLanguage): Promise<CourseLanguage>;
  update(courseLanguage: CourseLanguage): Promise<CourseLanguage>;
  delete(id: number): Promise<boolean>;

  getById(id: number): Promise<CourseLanguage>;
  getAll(): Promise<CourseLanguage[]>;
}
