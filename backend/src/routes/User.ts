import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();

const userController = new UserController();
routes.get("/user/all", userController.getAll);
routes.post("/user", userController.create);
routes.get("/user/:id", userController.getById);
routes.patch("/user/:id", userController.inactiveUser);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.delete);

export { routes };
