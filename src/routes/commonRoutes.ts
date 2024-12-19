import { Application } from "express";

export abstract class CommonRoute {
  protected app: Application;
  private name: string;
  protected route: string;

  constructor(app: Application, name: string, route: string = "") {
    this.app = app;
    this.name = name;
    this.route = route;
    this.configureRoutes();
  }

  getName(): string {
    return this.name;
  }

  getRoute(): string {
    return this.route;
  }

  abstract configureRoutes(): Application;
}
