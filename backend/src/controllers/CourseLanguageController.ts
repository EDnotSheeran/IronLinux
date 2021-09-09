import { Request, Response } from "express";
import { Course } from "../domains/Course";
import { CourseLanguage } from "../domains/CourseLanguage";
import { CourseLanguageService } from "../services/CourseLanguageService";

class CourseLanguageController {
  async create(request: Request, response: Response) {
    const course: CourseLanguage = request.body;
    const courseLanguageService = new CourseLanguageService();
    const courseLanguageCreated = await courseLanguageService.create(course);
    return response.status(201).json(courseLanguageCreated);
  }

  async get(request: Request, response: Response) {
    const courseLanguageService = new CourseLanguageService();
    const courseLanguage = await courseLanguageService.getAll();
    return response.status(200).json(courseLanguage);
  }

  async update(request: Request, response: Response) {
    const course: Course = request.body;
    const courseLanguageService = new CourseLanguageService();
    const courseLanguageUpdated = await courseLanguageService.update(course);
    return response.status(200).json(courseLanguageUpdated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const courseLanguageService = new CourseLanguageService();
    await courseLanguageService.delete(Number(id));

    return response.status(204).end();
  }
}

export { CourseLanguageController };
