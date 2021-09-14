import { Ratings } from "../../interfaces/Ratings";

export interface TypeFilterRatingsService {
  ratings: Ratings[];
  totalPages;
  totalRecords;
  currentPage;
}
export interface IRatingService {
  create({
    name,
    description,
    office,
    position,
    imageURL,
    rantingName,
    starts,
  }: Ratings): Promise<Ratings>;
  filterRatings(
    pageSize?: number,
    page?: number,
    sort?: string,
    sortField?: string
  ): Promise<TypeFilterRatingsService>;
  getById(id: number): Promise<Ratings>;
  delete(id: number): Promise<boolean>;
  update({
    id,
    name,
    description,
    office,
    position,
    imageURL,
    rantingName,
    starts,
  }: Ratings): Promise<Ratings>;
}
