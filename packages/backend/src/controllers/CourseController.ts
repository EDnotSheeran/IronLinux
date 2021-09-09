import { Request, Response } from "express";
import { Course } from "../domains/Course";
import { CourseGrade } from "../domains/CourseGrade";
import { CourseWithCourseGrade } from "../domains/CourseWithCourseGrade";
import { CourseService } from "../services/CourseService";

class CourseController {
  async create(request: Request, response: Response) {
    const course: CourseWithCourseGrade = request.body;
    const courseService = new CourseService();
    const courseCreated = await courseService.create(course);
    return response.status(201).json(courseCreated);
  }

  async filterCourses(request: Request, response: Response) {
    const { pageSize, page, sort, sortField } = request.query;
    const courseService = new CourseService();

    const course = await courseService.filterCourses(
      Number(pageSize),
      Number(page),
      String(sort),
      String(sortField)
    );
    return response.status(200).json(course);
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;
    const courseService = new CourseService();
    const course = await courseService.getById(Number(id));
    return response.status(200).json(course);
  }

  async getWithSlug(request: Request, response: Response) {
    const { slug } = request.params;
    const courseService = new CourseService();
    const course = await courseService.getBySlug(slug);
    return response.status(200).json(course);
  }

  async update(request: Request, response: Response) {
    const course: Course = request.body;
    const courseService = new CourseService();
    const courseUpdated = await courseService.update(course);
    return response.status(200).json(courseUpdated);
  }

  async patch(request: Request, response: Response) {
    const { id, published } = request.body;
    const courseService = new CourseService();
    const course = await courseService.inactiveCourse(Number(id), published);

    return response.status(200).json(course);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const courseService = new CourseService();
    await courseService.delete(Number(id));

    return response.status(204).end();
  }
}

export { CourseController };
