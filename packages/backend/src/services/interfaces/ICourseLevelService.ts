import { CourseLevel } from "../../interfaces/CourseLevel";

export interface ICourseLevelService {
  getById(id: number): Promise<CourseLevel>;
  create(courseLevel: CourseLevel): Promise<CourseLevel>;
  update(courseLevel: CourseLevel): Promise<CourseLevel>;
  delete(id: number): Promise<boolean>;
}
