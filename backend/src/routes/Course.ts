import { Router } from "express";
import { CourseController } from "../controllers/CourseController";

const routes = Router();

const courseController = new CourseController();
routes.get("/course/filter", courseController.filterCourses);
routes.get("/course/slug/:slug", courseController.getWithSlug);
routes.get("/course/:id", courseController.get);
routes.post("/course", courseController.create);
routes.delete("/course/:id", courseController.delete);
routes.patch("/course/", courseController.patch);
routes.put("/course/", courseController.update);

export { routes };
