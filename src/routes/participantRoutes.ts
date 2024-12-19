import { Application } from "express";
import { CommonRoute } from "./commonRoutes";
import { getAllEvents } from "../controllers/eventController";
import {
  addParticipant,
  getAllParticipants,
} from "../controllers/participantController";

export class ParticipantRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Participantes", "/participants");
  }

  configureRoutes() {
    this.app.get("/", getAllParticipants);
    this.app.post("/", addParticipant);
    return this.app;
  }
}
