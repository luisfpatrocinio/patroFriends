import { Application } from "express";
import { CommonRoute } from "./commonRoutes";
import { createEvent, getAllEvents } from "../controllers/eventController";

export class EventRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Eventos", "/events");
  }

  configureRoutes(): Application {
    this.app.get("/", getAllEvents);
    this.app.post("/", createEvent);
    return this.app;
  }
}
