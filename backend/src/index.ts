import express, { json } from "express";
import "express-async-errors";
import {
  UserRoutes,
  AuthRoutes,
  HomePage,
  Ratings,
  Course,
  CourseLevel,
  CourseLanguage,
} from "./routes";
import { errorsMiddleware, ensureAuthenticated } from "./middlewares";
import cors from "cors";
import swaggerUiExpress from "swagger-ui-express";
import apiDocsJson from "./docs/api-docs.json";
const app = express();

app.use(json());
app.use(cors());
// app.use(ensureAuthenticated);
app.use(
  "/v1",
  AuthRoutes,
  UserRoutes,
  HomePage,
  Ratings,
  CourseLanguage,
  CourseLevel,
  Course
);
app.use(errorsMiddleware);

app.use(
  "/v1/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(apiDocsJson)
);
app.listen(3333, () => {
  console.log("server is running");
});
