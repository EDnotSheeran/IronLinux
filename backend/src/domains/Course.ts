export interface Course {
  id?: number;
  title: string;
  price: number;
  description: string;
  slug: string;
  course_hours: string;
  certified: boolean;
  published: boolean;
  levelCourseId: number;
  languageCourseId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
