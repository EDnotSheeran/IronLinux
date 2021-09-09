import { Router } from "express";
import { CourseLevelController } from "../controllers/CourseLevelController ";

const routes = Router();

const courseLevelController = new CourseLevelController();
routes.get("/course/level/all", courseLevelController.get);
routes.post("/course/level", courseLevelController.create);
routes.delete("/course/level/:id", courseLevelController.delete);
routes.put("/course/level", courseLevelController.update);

export { routes };
