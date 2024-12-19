import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send("Lista de usuários");
};

export const getUserById = (req: Request, res: Response) => {
  res.status(200).send("Usuário encontrado");
};

export const createUser = (req: Request, res: Response) => {
  res.status(201).send("Usuário criado");
};
