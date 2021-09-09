import { Request, Response } from "express";
import { HomePage } from "../domains/HomePage";
import { HomePageService } from "../services/HomePageService";

class HomePageController {
  async updateOrCreate(request: Request, response: Response) {
    const HomePage: HomePage = request.body;
    const homePageService = new HomePageService();
    const homepage = await homePageService.updateOrCreate(HomePage);
    return response.status(201).json(homepage);
  }

  async get(request: Request, response: Response) {
    const homePageService = new HomePageService();
    const homepage = await homePageService.getLast();
    return response.status(200).json(homepage);
  }
}

export { HomePageController };
