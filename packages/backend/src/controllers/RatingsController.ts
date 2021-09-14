import { Request, Response } from "express";
import { Ratings } from "../interfaces/Ratings";
import { RatingsService } from "../services/RatingService";

class RatingsController {
  async create(request: Request, response: Response) {
    const Rating: Ratings = request.body;
    const ratingsService = new RatingsService();
    const rating = await ratingsService.create(Rating);
    return response.status(201).json(rating);
  }

  async filterRatings(request: Request, response: Response) {
    const { pageSize, page, sort, sortField } = request.query;
    const ratingsService = new RatingsService();

    const rating = await ratingsService.filterRatings(
      Number(pageSize),
      Number(page),
      String(sort),
      String(sortField)
    );
    return response.status(200).json(rating);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const ratingsService = new RatingsService();
    await ratingsService.delete(Number(id));
    return response.status(204).end();
  }
}

export { RatingsController };
