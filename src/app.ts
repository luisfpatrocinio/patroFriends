import express, { Application } from "express";
import { CommonRoute } from "./routes/commonRoutes";
import { UserRoutes } from "./routes/usersRoutes";
import { EventRoutes } from "./routes/eventsRoutes";

const app: Application = express();
app.use(express.json());


// Rotas
const routes: Array<CommonRoute> = [];
routes.push(new UserRoutes(app), new EventRoutes(app));

routes.forEach((route) => {
  console.log(`Rotas de ${route.getName()}: \t${route.getRoute()}`);
});

export default app;
