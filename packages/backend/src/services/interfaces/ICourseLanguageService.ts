import { CourseLanguage } from "../../interfaces/CourseLanguage";

export interface ICourseLanguageService {
  getById(id: number): Promise<CourseLanguage>;
  getAll(): Promise<CourseLanguage[]>;
  create(courseLanguage: CourseLanguage): Promise<CourseLanguage>;
  update(courseLanguage: CourseLanguage): Promise<CourseLanguage>;
  delete(id: number): Promise<boolean>;
}
