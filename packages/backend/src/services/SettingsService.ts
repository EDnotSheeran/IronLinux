import { Settings } from "src/interfaces/Settings";
import { ISettingsRepository } from "src/repository/interfaces/ISettingsRepository";
import { SettingsRepository } from "src/repository/SettingsRepository";
import { ErrorRequest } from "../classes/ErrorRequest";
import { ISettingsService } from "./interfaces/ISettingsService";
class SettingsService implements ISettingsService {
  private settingsRepository: ISettingsRepository;

  constructor() {
    this.settingsRepository = new SettingsRepository();
  }
  async updateOrCreate(settings: Settings): Promise<Settings> {
    settings = this.SettingsPrepare(settings);
    const settingsCreated = await this.settingsRepository.updateOrCreate(
      settings
    );
    return settingsCreated;
  }

  async getLast(): Promise<Settings> {
    const settings = await this.settingsRepository.getLastCreated();
    if (!settings) {
      throw new ErrorRequest(
        "Não foi encontrado as informações de configuração",
        404
      );
    }
    return settings;
  }

  private SettingsPrepare(settings: Settings) {
    return {
      id: settings.id,
      companyName: settings.companyName,
      companySocialName: settings.companySocialName,
      cookies_policy: settings.cookies_policy,
      facebookActive: settings.facebookActive,
      facebookURL: settings.facebookURL,
      footerIcon: settings.footerIcon,
      headerIcon: settings.headerIcon,
      hotmartActive: settings.hotmartActive,
      hotmartURL: settings.hotmartURL,
      instagramActive: settings.instagramActive,
      instagramURL: settings.instagramURL,
      linkedinActive: settings.linkedinActive,
      linkedinURL: settings.linkedinURL,
      menuIcon: settings.menuIcon,
      notifications_policy: settings.notifications_policy,
      twitterActive: settings.twitterActive,
      twitterURL: settings.twitterURL,
    };
  }
}

export { SettingsService };
