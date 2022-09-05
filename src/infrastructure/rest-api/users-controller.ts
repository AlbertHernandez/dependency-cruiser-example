import express from "express";
import { WelcomeEmailSender } from "../../application/welcome-email-sender";

export class UsersController {
  constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

  async sendWelcomeEmail(req: express.Request, res: express.Response) {
    await this.welcomeEmailSender.sendToUser(req.params.id);
    res.status(200).send();
  }
}
