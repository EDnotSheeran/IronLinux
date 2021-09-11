import { Ratings } from "../../interfaces/Ratings";
export interface IRatingsRepository {
  save(ratings: Ratings): Promise<Ratings>;
  update(ratings: Ratings): Promise<Ratings>;
  delete(id: number): Promise<boolean>;
  filterRatings(
    pageSize?: number,
    offset?: number,
    orderBy?: Array<object>
  ): Promise<Ratings[]>;
  getById(id: number): Promise<Ratings>;
  count(): Promise<number>;
}
