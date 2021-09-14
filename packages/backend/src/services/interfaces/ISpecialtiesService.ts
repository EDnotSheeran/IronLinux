import { Specialties } from "../../interfaces/Specialties";

export interface ISpecialtiesService {
  getById(id: number): Promise<Specialties>;
  getAll(): Promise<Specialties[]>;
  create(specialties: Specialties): Promise<Specialties>;
  update(specialties: Specialties): Promise<Specialties>;
  delete(id: number): Promise<boolean>;
}
