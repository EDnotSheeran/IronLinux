import { CourseLevel } from "../../interfaces/CourseLevel";
export interface ICourseLevelRepository {
  save(courseLevel: CourseLevel): Promise<CourseLevel>;
  update(courseLevel: CourseLevel): Promise<CourseLevel>;
  delete(id: number): Promise<boolean>;

  getById(id: number): Promise<CourseLevel>;
  getAll(): Promise<CourseLevel[]>;
}
