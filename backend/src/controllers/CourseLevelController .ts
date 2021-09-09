import { Request, Response } from "express";
import { Course } from "../domains/Course";
import { CourseLanguage } from "../domains/CourseLanguage";
import { CourseLevelService } from "../services/CourseLevelService";

class CourseLevelController {
  async create(request: Request, response: Response) {
    const course: CourseLanguage = request.body;
    const courseLevelService = new CourseLevelService();
    const courseLanguageCreated = await courseLevelService.create(course);
    return response.status(201).json(courseLanguageCreated);
  }

  async get(request: Request, response: Response) {
    const courseLevelService = new CourseLevelService();
    const courseLanguage = await courseLevelService.getAll();
    return response.status(200).json(courseLanguage);
  }

  async update(request: Request, response: Response) {
    const course: Course = request.body;
    const courseLevelService = new CourseLevelService();
    const courseLanguageUpdated = await courseLevelService.update(course);
    return response.status(200).json(courseLanguageUpdated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const courseLevelService = new CourseLevelService();
    await courseLevelService.delete(Number(id));

    return response.status(204).end();
  }
}

export { CourseLevelController };
