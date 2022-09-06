import { InMemoryUsersRepository } from "./database/in-memory-users-repository";
import { UsersController } from "./rest-api/users-controller";
import { FakeEmailSender } from "./email-sender/fake-email-sender";
import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { UserByIdFinder } from "../domain/user-by-id-finder";

const inMemoryUsersRepository = new InMemoryUsersRepository();
const fakeEmailSender = new FakeEmailSender();
const userByIdFinder = new UserByIdFinder(inMemoryUsersRepository);
const welcomeEmailSender = new WelcomeEmailSender(
  userByIdFinder,
  fakeEmailSender
);

export const usersController = new UsersController(welcomeEmailSender);
