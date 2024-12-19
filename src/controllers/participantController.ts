import { Request, Response } from "express";

export const getAllParticipants = (req: Request, res: Response) => {
  res.status(200).send("Lista de participantes");
};

export const addParticipant = (req: Request, res: Response) => {
    const { userId, eventId } = req.body;
    res.status(201).send("Participante adicionado");
}