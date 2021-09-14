export interface CourseGrade {
  id: number;
  title: string;
  description: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
  courseId: number;
}
