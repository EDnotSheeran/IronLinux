import { Request, Response } from "express";
import { Specialties } from "prisma/prisma-client";
import { SpecialtiesService } from "../services/SpecialtiesService";

class SpecialtiesController {
  async create(request: Request, response: Response) {
    const specialtie: Specialties = request.body;
    const specialtiesService = new SpecialtiesService();
    const specialtieLanguageCreated = await specialtiesService.create(
      specialtie
    );
    return response.status(201).json(specialtieLanguageCreated);
  }

  async get(request: Request, response: Response) {
    const specialtiesService = new SpecialtiesService();
    const specialtieLanguage = await specialtiesService.getAll();
    return response.status(200).json(specialtieLanguage);
  }

  async update(request: Request, response: Response) {
    const specialtie: Specialties = request.body;
    const specialtiesService = new SpecialtiesService();
    const specialtieLanguageUpdated = await specialtiesService.update(
      specialtie
    );
    return response.status(200).json(specialtieLanguageUpdated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const specialtiesService = new SpecialtiesService();
    await specialtiesService.delete(Number(id));

    return response.status(204).end();
  }
}

export { SpecialtiesController };
