import { UsersRepository } from "../../domain/users-repository";
import { User } from "../../domain/user";
import { USERS } from "./users";

export class InMemoryUsersRepository implements UsersRepository {
  async getById(id: string): Promise<User | null> {
    return USERS.find((user) => user.id === id) || null;
  }
}
