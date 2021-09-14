import { Specialties } from "../../interfaces/Specialties";
export interface ISpecialtiesRepository {
  save(specialties: Specialties): Promise<Specialties>;
  update(specialties: Specialties): Promise<Specialties>;
  delete(id: number): Promise<boolean>;

  getById(id: number): Promise<Specialties>;
  getAll(): Promise<Specialties[]>;
}
