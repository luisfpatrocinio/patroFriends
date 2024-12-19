import { Request, Response } from "express";

export const getAllEvents = (req: Request, res: Response) => {
  res.status(200).send("Lista de eventos");
};

export const createEvent = (req: Request, res: Response) => {
  // Vai chegar um json com name, description e date
  const { name, description, date } = req.body;

  // Conferir se todos os campos foram preenchidos
  if (!name || !description || !date) {
    res.status(400).send("Dados inválidos");
  }

  // Conferir se a data é válida ou se já passou
  const eventDate = new Date(date);
  const today = new Date();
  if (eventDate < today) {
    res.status(400).send("Data inválida");
  }

  res.status(201).send("Evento criado");
};
