import { User } from "./user";
import { UsersRepository } from "./users-repository";

export class UserByIdFinder {
  constructor(private readonly usersRepository: UsersRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.usersRepository.getById(id);

    if (!user) {
      throw new Error(`User not found: ${id}`);
    }

    return user;
  }
}
