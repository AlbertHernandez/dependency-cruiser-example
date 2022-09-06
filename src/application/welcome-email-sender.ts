import { UserByIdFinder } from "../domain/user-by-id-finder";
import { FakeEmailSender } from "../infrastructure/email-sender/fake-email-sender";

export class WelcomeEmailSender {
  constructor(
    private readonly userByIdFinder: UserByIdFinder,
    private readonly emailSender: FakeEmailSender
  ) {}

  async sendToUser(userId: string): Promise<void> {
    console.debug(
      `[WelcomeEmailSender] - Sending welcome email to user: ${userId}`
    );

    const user = await this.userByIdFinder.run(userId);
    await this.emailSender.sendEmail(user.email, "Welcome to coverwallet!");

    console.debug(
      "[WelcomeEmailSender] - Successfully sent the welcome email to the user"
    );
  }
}
