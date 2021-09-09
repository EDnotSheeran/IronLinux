import { Router } from "express";
import { RatingsController } from "../controllers/RatingsController";

const routes = Router();

const ratingsController = new RatingsController();
routes.get("/rating/filter", ratingsController.filterRatings);
routes.post("/rating", ratingsController.create);
routes.delete("/rating/:id", ratingsController.delete);

export { routes };
