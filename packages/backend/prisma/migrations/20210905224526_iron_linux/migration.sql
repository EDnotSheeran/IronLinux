-- CreateEnum
CREATE TYPE "Page" AS ENUM ('HOMEPAGE', 'ABOUT_US', 'CONSULTING', 'COURSES', 'VIEW_COURSE', 'BLOG');

-- CreateTable
CREATE TABLE "InfoHomePage" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "titleHomePageSpecialties" VARCHAR(255) NOT NULL,
    "titleHomePageCourses" VARCHAR(255) NOT NULL,
    "titleHomePagePosts" VARCHAR(255) NOT NULL,
    "titleHomePageExperts" VARCHAR(255) NOT NULL,
    "descriptionHomePageExperts" VARCHAR(255) NOT NULL,
    "titleContactUS" VARCHAR(255) NOT NULL,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomePageSpecialties" (
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',
    "specialtyId" INTEGER NOT NULL,

    PRIMARY KEY ("specialtyId")
);

-- CreateTable
CREATE TABLE "HomePageCourses" (
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',
    "course" INTEGER NOT NULL,

    PRIMARY KEY ("course")
);

-- CreateTable
CREATE TABLE "HomePageRatings" (
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',
    "ratingsId" INTEGER NOT NULL,

    PRIMARY KEY ("ratingsId")
);

-- CreateTable
CREATE TABLE "HomePageExperts" (
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',
    "expertId" INTEGER NOT NULL,

    PRIMARY KEY ("expertId")
);

-- CreateTable
CREATE TABLE "Specialties" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "positions" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "rantingName" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "office" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "position" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "starts" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutCourses" (
    "id" SERIAL NOT NULL,
    "titleFirst" VARCHAR(255) NOT NULL,
    "title1" VARCHAR(255) NOT NULL,
    "description1" VARCHAR(255) NOT NULL,
    "title2" VARCHAR(255) NOT NULL,
    "description2" VARCHAR(255) NOT NULL,
    "title3" VARCHAR(255) NOT NULL,
    "description3" VARCHAR(255) NOT NULL,
    "title4" VARCHAR(255) NOT NULL,
    "description4" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutConsulting" (
    "id" SERIAL NOT NULL,
    "titleFirst" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "checkedDescription1" VARCHAR(255) NOT NULL,
    "checkedDescription2" VARCHAR(255) NOT NULL,
    "checkedDescription3" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "headerIcon" VARCHAR(255) NOT NULL,
    "menuIcon" VARCHAR(255) NOT NULL,
    "footerIcon" VARCHAR(255) NOT NULL,
    "cookies_policy" TEXT NOT NULL,
    "notifications_policy" TEXT NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "companySocialName" VARCHAR(255) NOT NULL,
    "facebookURL" VARCHAR(255) NOT NULL,
    "facebookActive" BOOLEAN NOT NULL,
    "twitterURL" VARCHAR(255) NOT NULL,
    "twitterActive" BOOLEAN NOT NULL,
    "instagramURL" VARCHAR(255) NOT NULL,
    "instagramActive" BOOLEAN NOT NULL,
    "hotmartURL" VARCHAR(255) NOT NULL,
    "hotmartActive" BOOLEAN NOT NULL,
    "linkedinURL" VARCHAR(255) NOT NULL,
    "linkedinActive" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomePagePosts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "page" "Page" NOT NULL DEFAULT E'HOMEPAGE',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "slug" VARCHAR(20) NOT NULL,
    "course_hours" VARCHAR(20) NOT NULL,
    "certified" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "levelCourseId" INTEGER NOT NULL,
    "languageCourseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseLevel" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseLanguage" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "active" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseGrade" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" INTEGER NOT NULL,

    PRIMARY KEY ("courseId","id")
);

-- CreateTable
CREATE TABLE "UserToCourse" (
    "authorId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    PRIMARY KEY ("authorId","courseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course.slug_unique" ON "Course"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CourseGrade.courseId_position_id_unique" ON "CourseGrade"("courseId", "position", "id");

-- AddForeignKey
ALTER TABLE "HomePageSpecialties" ADD FOREIGN KEY ("specialtyId") REFERENCES "Specialties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePageCourses" ADD FOREIGN KEY ("course") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePageRatings" ADD FOREIGN KEY ("ratingsId") REFERENCES "Ratings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomePageExperts" ADD FOREIGN KEY ("expertId") REFERENCES "Experts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD FOREIGN KEY ("levelCourseId") REFERENCES "CourseLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD FOREIGN KEY ("languageCourseId") REFERENCES "CourseLanguage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseGrade" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToCourse" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToCourse" ADD FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
