import { Router } from "express";
import { HomePageController } from "../controllers/HomePageController";

const routes = Router();

const homePageController = new HomePageController();
routes.post("/home_page", homePageController.updateOrCreate);
routes.get("/home_page", homePageController.get);

export { routes };
