import { Request, Response } from "express";

class SettingsController {
  async create(request: Request, response: Response) {
    return response.status(201).json({});
  }

  async get(request: Request, response: Response) {
    const { Page } = request.params;
    return response.status(200).json({});
  }

  async update(request: Request, response: Response) {
    return response.status(200).json({});
  }
}

export { SettingsController };
