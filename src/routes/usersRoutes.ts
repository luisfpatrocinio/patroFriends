import { Application } from "express";
import { CommonRoute } from "./commonRoutes";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/userController";

export class UserRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Usuários", "/users");
  }

  configureRoutes(): Application {
    this.app.get("/", getAllUsers);
    this.app.get("/:id", getUserById);
    this.app.post("/", createUser);
    return this.app;
  }
}
