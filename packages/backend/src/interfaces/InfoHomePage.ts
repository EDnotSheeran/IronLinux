import { Page } from "./enums/Page";

export interface InfoHomePage {
  id?: number;
  title: string;
  description: string;
  imageURL: string;
  titleHomePageSpecialties: string;
  titleHomePageCourses: string;
  titleHomePageExperts: string;
  descriptionHomePageExperts: string;
  titleContactUS: string;
  titleHomePagePosts: string;
  page?: Page;
}
