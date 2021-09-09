import { Page } from "./enums/Page";

export interface Specialties {
  id?: number;
  title: string;
  description: string;
  positions: number;
  createdAt: Date;
  updatedAt: Date;
  page?: Page;
}
