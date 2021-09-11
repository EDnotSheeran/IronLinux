/*
  Warnings:

  - A unique constraint covering the columns `[courseId,id]` on the table `CourseGrade` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CourseGrade.courseId_position_id_unique";

-- CreateIndex
CREATE UNIQUE INDEX "CourseGrade.courseId_id_unique" ON "CourseGrade"("courseId", "id");
