import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { ICourseLanguageRepository } from "../repository/interfaces/ICourseLanguageRepository";
import { CourseLanguageRepository } from "../repository/CourseLanguageRepository";
import { CourseLanguage } from "../domains/CourseLanguage";
dotenv.config();
class CourseLanguageService {
  private courseLanguageRepository: ICourseLanguageRepository;

  constructor() {
    this.courseLanguageRepository = new CourseLanguageRepository();
  }
  async getById(id: number): Promise<CourseLanguage> {
    const courseLanguage = await this.courseLanguageRepository.getById(id);
    if (!courseLanguage) {
      throw new ErrorRequest("Lingua não encontrada", 404);
    }
    return courseLanguage;
  }

  async getAll(): Promise<CourseLanguage[]> {
    return this.courseLanguageRepository.getAll();
  }

  async create(courseLanguage: CourseLanguage): Promise<CourseLanguage> {
    const courseCreated = await this.courseLanguageRepository.save(
      courseLanguage
    );

    return courseCreated;
  }
  async update(courseLanguage: CourseLanguage): Promise<CourseLanguage> {
    await this.getById(courseLanguage.id);
    const courseUpdated = await this.courseLanguageRepository.update(
      courseLanguage
    );

    return courseUpdated;
  }
  async delete(id: number): Promise<boolean> {
    await this.courseLanguageRepository.delete(id);
    return true;
  }
}

export { CourseLanguageService };
