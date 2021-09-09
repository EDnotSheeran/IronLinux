import { ErrorRequest } from "../classes/ErrorRequest";
import { AboutConsulting } from "../domains/AboutConsulting";
import { AboutCourses } from "../domains/AboutCourses";
import { HomePage } from "../domains/HomePage";
import { InfoHomePage } from "../domains/InfoHomePage";
import { HomePageRepository } from "../repository/HomePageRepository";
class HomePageService {
  async updateOrCreate(HomePage: HomePage) {
    const aboutConsulting = this.AboutConsultingPrepare(
      HomePage.aboutConsulting
    );
    const aboutCourses = this.AboutCoursesPrepare(HomePage.aboutCourses);
    const infoHomePage = this.InfoHomePagePrepare(HomePage.infoHomePage);

    const homePageRepository = new HomePageRepository();
    const homePage = await homePageRepository.updateOrCreate({
      infoHomePage,
      aboutConsulting,
      aboutCourses,
    });
    return homePage;
  }

  async getLast() {
    const aboutConsultingRepository = new HomePageRepository();
    const aboutConsulting = await aboutConsultingRepository.getLastCreated();
    if (!aboutConsulting) {
      throw new ErrorRequest(
        "Não foi encontrado as informações da página inicial",
        404
      );
    }
    return aboutConsulting;
  }

  private InfoHomePagePrepare(InfoHomePage: InfoHomePage) {
    return {
      id: InfoHomePage.id ?? 1,
      imageURL: InfoHomePage.imageURL,
      title: InfoHomePage.title,
      description: InfoHomePage.description,
      titleHomePageCourses: InfoHomePage.titleHomePageCourses,
      titleHomePageExperts: InfoHomePage.titleHomePageExperts,
      descriptionHomePageExperts: InfoHomePage.descriptionHomePageExperts,
      titleContactUS: InfoHomePage.titleContactUS,
      titleHomePagePosts: InfoHomePage.titleHomePagePosts,
      titleHomePageSpecialties: InfoHomePage.titleHomePageSpecialties,
      page: InfoHomePage.page ?? "HOMEPAGE",
    };
  }

  private AboutConsultingPrepare(AboutConsulting: AboutConsulting) {
    return {
      id: AboutConsulting.id ?? 1,
      imageURL: AboutConsulting.imageURL,
      titleFirst: AboutConsulting.titleFirst,
      title: AboutConsulting.title,
      description: AboutConsulting.description,
      checkedDescription1: AboutConsulting.checkedDescription1,
      checkedDescription2: AboutConsulting.checkedDescription2,
      checkedDescription3: AboutConsulting.checkedDescription3,
      createdAt: AboutConsulting.createdAt,
      updatedAt: AboutConsulting.updatedAt,
      page: AboutConsulting.page ?? "HOMEPAGE",
    };
  }

  private AboutCoursesPrepare(AboutCourses: AboutCourses) {
    return {
      id: AboutCourses.id ?? 1,
      imageURL: AboutCourses.imageURL,
      titleFirst: AboutCourses.titleFirst,
      title1: AboutCourses.title1,
      description1: AboutCourses.description1,
      title2: AboutCourses.title2,
      description2: AboutCourses.description2,
      title3: AboutCourses.title3,
      description3: AboutCourses.description3,
      title4: AboutCourses.title4,
      description4: AboutCourses.description4,
      createdAt: AboutCourses.createdAt,
      updatedAt: AboutCourses.updatedAt,
      page: AboutCourses.page ?? "HOMEPAGE",
    };
  }
}

export { HomePageService };
