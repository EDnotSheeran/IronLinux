import { PrismaClient } from "@prisma/client";
import { ErrorRequest } from "../classes/ErrorRequest";
import { HomePage } from "../domains/HomePage";
class HomePageRepository {
  async updateOrCreate(HomePage: HomePage): Promise<HomePage> {
    try {
      const prisma = new PrismaClient();
      const [infoHomePage, aboutCourses, aboutConsulting] =
        await prisma.$transaction([
          prisma.infoHomePage.upsert({
            where: {
              id: HomePage.infoHomePage.id,
            },
            update: HomePage.infoHomePage,
            create: HomePage.infoHomePage,
          }),
          prisma.aboutCourses.upsert({
            where: {
              id: HomePage.aboutCourses.id,
            },
            update: HomePage.aboutCourses,
            create: HomePage.aboutCourses,
          }),
          prisma.aboutConsulting.upsert({
            where: {
              id: HomePage.aboutConsulting.id,
            },
            update: HomePage.aboutConsulting,
            create: HomePage.aboutConsulting,
          }),
        ]);
      return { infoHomePage, aboutCourses, aboutConsulting };
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes(
          "Invalid `prisma.infoHomePage.upsert()` invocation"
        )
      )
        throw new ErrorRequest("Dados inconsistentes", 406);
    }
  }

  async getLastCreated(): Promise<HomePage> {
    const prisma = new PrismaClient();

    const infoHomePage = await prisma.infoHomePage.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    const aboutCourses = await prisma.aboutCourses.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    const aboutConsulting = await prisma.aboutConsulting.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    return { infoHomePage, aboutCourses, aboutConsulting };
  }
}

export { HomePageRepository };
