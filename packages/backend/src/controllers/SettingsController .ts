import { Request, Response } from "express";
import { Settings } from "src/interfaces/Settings";
import { SettingsService } from "src/services/SettingsService";

class SettingsController {
  async updateOrCreate(request: Request, response: Response) {
    const settingsService = new SettingsService();
    const settings: Settings = request.body;
    const settingCreated = await settingsService.updateOrCreate(settings);
    return response.status(201).json(settingCreated);
  }

  async get(request: Request, response: Response) {
    const settingsService = new SettingsService();
    const settings = await settingsService.getLast();
    return response.status(200).json(settings);
  }
}

export { SettingsController };
