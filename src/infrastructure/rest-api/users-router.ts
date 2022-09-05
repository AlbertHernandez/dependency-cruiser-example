import express from "express";
import { usersController } from "../dependencies";

const usersRouter = express.Router();

usersRouter.post(
  "/:id/welcome",
  usersController.sendWelcomeEmail.bind(usersController)
);

export { usersRouter };
