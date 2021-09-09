import { Router } from "express";
import { CourseLanguageController } from "../controllers/CourseLanguageController";

const routes = Router();

const courseLanguageController = new CourseLanguageController();
routes.get("/course/language/all", courseLanguageController.get);
routes.post("/course/language", courseLanguageController.create);
routes.put("/course/language", courseLanguageController.update);
routes.delete("/course/language/:id", courseLanguageController.delete);

export { routes };
