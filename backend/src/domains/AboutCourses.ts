import { Page } from "@prisma/client";

export interface AboutCourses {
  id: number;
  titleFirst: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
  page: Page;
}
