import { PrismaClientValidationError } from "@prisma/client/runtime";
import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { ErrorRequest } from "../classes/ErrorRequest";
interface Error {
  name: string;
  message?: string;
  stack?: string;
  code?: string;
  meta?: {
    model_a_name: string;
  };
}
export function errorsMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(error);
  if (error instanceof ErrorRequest) {
    return response.status(error.statusCode).json({ error: error.message });
  }
  if (error instanceof PrismaClientValidationError) {
    return response.status(400).json({ error: "Erro ao persistir dados" });
  }
  if (error.code === "P2014") {
    return response.status(400).json({
      error: `Não foi possível excluir este dado. Possui vinculo com ${error.meta.model_a_name}.`,
    });
  }
  return response.status(500).json({
    error: "Internal Server Error",
  });
}
