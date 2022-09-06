import express from "express";
import { usersRouter } from "./infrastructure/rest-api/users-router";
import bodyParser from "body-parser";

const PORT = 3000;

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/users", usersRouter);

  app.listen(PORT, () => {
    console.log(
      `[APP] - Starting app with async local storage on port ${PORT}`
    );
  });
}

boostrap();
