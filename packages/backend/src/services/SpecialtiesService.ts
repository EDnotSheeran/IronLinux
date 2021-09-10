import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { ISpecialtiesRepository } from "../repository/interfaces/ISpecialtiesRepository";
import { SpecialtiesRepository } from "../repository/SpecialtiesRepository";
import { Specialties } from "../domains/Specialties";
dotenv.config();
class SpecialtiesService {
  private specialtiesRepository: ISpecialtiesRepository;

  constructor() {
    this.specialtiesRepository = new SpecialtiesRepository();
  }
  async getById(id: number): Promise<Specialties> {
    const specialties = await this.specialtiesRepository.getById(id);
    if (!specialties) {
      throw new ErrorRequest("Lingua não encontrada", 404);
    }
    return specialties;
  }

  async getAll(): Promise<Specialties[]> {
    return this.specialtiesRepository.getAll();
  }

  async create(specialties: Specialties): Promise<Specialties> {
    const courseCreated = await this.specialtiesRepository.save(specialties);

    return courseCreated;
  }
  async update(specialties: Specialties): Promise<Specialties> {
    await this.getById(specialties.id);
    const courseUpdated = await this.specialtiesRepository.update(specialties);

    return courseUpdated;
  }
  async delete(id: number): Promise<boolean> {
    await this.specialtiesRepository.delete(id);
    return true;
  }
}

export { SpecialtiesService };
