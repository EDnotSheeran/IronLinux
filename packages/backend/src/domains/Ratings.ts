import { Page } from "./enums/Page";

export interface Ratings {
  id?: number;
  rantingName: string;
  name: string;
  office: string;
  imageURL: string;
  position: number;
  description: string;
  starts: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  page?: Page;
}
