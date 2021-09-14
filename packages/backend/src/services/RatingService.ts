import { ErrorRequest } from "../classes/ErrorRequest";
import * as dotenv from "dotenv";
import { Ratings } from "../interfaces/Ratings";
import { RatingsRepository } from "../repository/RatingsRepository";
import { IRatingsRepository } from "../repository/interfaces/IRatingsRepository";
import { PaginationUtils } from "../utils/PaginationUtils";
import {
  IRatingService,
  TypeFilterRatingsService,
} from "./interfaces/IRatingService";
dotenv.config();
class RatingsService implements IRatingService {
  private ratingsRepository: IRatingsRepository;
  private paginationUtils: PaginationUtils;

  constructor() {
    this.ratingsRepository = new RatingsRepository();
    this.paginationUtils = new PaginationUtils();
  }

  async create({
    name,
    description,
    office,
    position,
    imageURL,
    rantingName,
    starts,
  }: Ratings): Promise<Ratings> {
    const ratingsCreated = await this.ratingsRepository.save({
      name,
      description,
      office,
      position,
      imageURL,
      rantingName,
      starts,
    });

    return ratingsCreated;
  }

  async filterRatings(
    pageSize?: number,
    page?: number,
    sort?: string,
    sortField?: string
  ): Promise<TypeFilterRatingsService> {
    const { results, currentPage, totalPages, totalRecords } =
      await this.paginationUtils.pagination(
        pageSize,
        page,
        sort,
        sortField,
        "Ratings"
      );

    return {
      ratings: results,
      totalPages,
      totalRecords,
      currentPage,
    };
  }

  async getById(id: number): Promise<Ratings> {
    const ratings = await this.ratingsRepository.getById(id);
    if (!ratings) {
      throw new ErrorRequest("Avaliação não encontrado", 404);
    }
    return ratings;
  }

  async delete(id: number): Promise<boolean> {
    await this.getById(id);
    this.ratingsRepository.delete(id);

    return true;
  }

  async update({
    id,
    name,
    description,
    office,
    position,
    imageURL,
    rantingName,
    starts,
  }: Ratings): Promise<Ratings> {
    await this.getById(id);

    const ratings = this.ratingsRepository.update({
      name,
      description,
      office,
      position,
      imageURL,
      rantingName,
      starts,
    });

    return ratings;
  }
}

export { RatingsService };
