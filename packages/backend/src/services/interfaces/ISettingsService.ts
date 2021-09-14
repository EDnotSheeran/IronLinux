import { Settings } from "../../interfaces/Settings";

export interface ISettingsService {
  updateOrCreate(settings: Settings): Promise<Settings>;
  getLast(): Promise<Settings>;
}
