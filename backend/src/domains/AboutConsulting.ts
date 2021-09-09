import { Page } from "./enums/Page";

export interface AboutConsulting {
  id: number;
  titleFirst: string;
  title: string;
  description: string;
  checkedDescription1: string;
  checkedDescription2: string;
  checkedDescription3: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
  page: Page;
}
