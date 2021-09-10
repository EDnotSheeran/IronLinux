import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { ICourseLevelRepository } from "../repository/interfaces/ICourseLevelRepository";
import { CourseLevelRepository } from "../repository/CourseLevelRepository";
import { CourseLevel } from "../domains/CourseLevel";
dotenv.config();
class CourseLevelService {
  private courseLevelRepository: ICourseLevelRepository;

  constructor() {
    this.courseLevelRepository = new CourseLevelRepository();
  }

  async getById(id: number): Promise<CourseLevel> {
    const courseLevel = await this.courseLevelRepository.getById(id);
    if (!courseLevel) {
      throw new ErrorRequest("Nivel de Curso não encontrado", 404);
    }
    return courseLevel;
  }

  async getAll(): Promise<CourseLevel[]> {
    console.log("teste");
    return this.courseLevelRepository.getAll();
  }

  async create(courseLevel: CourseLevel): Promise<CourseLevel> {
    const courseCreated = await this.courseLevelRepository.save(courseLevel);

    return courseCreated;
  }
  async update(courseLevel: CourseLevel): Promise<CourseLevel> {
    await this.getById(courseLevel.id);
    const courseUpdated = await this.courseLevelRepository.update(courseLevel);

    return courseUpdated;
  }
  async delete(id: number): Promise<boolean> {
    await this.courseLevelRepository.delete(id);
    return true;
  }
}

export { CourseLevelService };
