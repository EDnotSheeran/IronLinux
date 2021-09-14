import { Request, Response } from "express";
import { User } from "../interfaces/User";
import { UserService } from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password, description, active }: User = request.body;
    const createUserService = new UserService();

    const user = await createUserService.create({
      name,
      email,
      password,
      description,
      active,
    });

    return response.status(201).json(user);
  }

  async getAll(request: Request, response: Response) {
    const createUserService = new UserService();

    const user = await createUserService.getAll();

    return response.status(200).json(user);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;
    const createUserService = new UserService();

    const user = await createUserService.getById(Number(id));

    return response.status(200).json(user);
  }

  async inactiveUser(request: Request, response: Response) {
    const { id } = request.params;
    const createUserService = new UserService();

    const user = await createUserService.inactiveUser(Number(id));

    return response.status(200).json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const createUserService = new UserService();

    await createUserService.delete(Number(id));

    return response.status(204);
  }

  async update(request: Request, response: Response) {
    const { id, active, description, name, email, password }: User =
      request.body;
    const createUserService = new UserService();

    const user = await createUserService.update({
      id,
      active,
      description,
      name,
      email,
      password,
    });

    return response.status(200).json(user);
  }
}

export { UserController };
