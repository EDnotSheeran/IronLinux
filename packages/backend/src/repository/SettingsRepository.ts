import { PrismaClient } from "@prisma/client";
import { Settings } from "src/interfaces/Settings";
import { ErrorRequest } from "../classes/ErrorRequest";
import { ISettingsRepository } from "./interfaces/ISettingsRepository";
class SettingsRepository implements ISettingsRepository {
  async updateOrCreate(settings: Settings): Promise<Settings> {
    try {
      const prisma = new PrismaClient();
      const settingsCreated = await prisma.settings.upsert({
        create: settings,
        update: settings,
        where: { id: settings.id ?? 1 },
      });
      return settingsCreated;
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("Invalid `prisma.settings.upsert()` invocation")
      )
        throw new ErrorRequest("Dados inconsistentes", 406);
      throw error;
    }
  }

  async getLastCreated(): Promise<Settings> {
    const prisma = new PrismaClient();

    const settings = await prisma.settings.findFirst();

    return settings;
  }
}

export { SettingsRepository };
