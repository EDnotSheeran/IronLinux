import { Settings } from "src/interfaces/Settings";

export interface ISettingsRepository {
  updateOrCreate(settings: Settings): Promise<Settings>;
  getLastCreated(): Promise<Settings>;
}
