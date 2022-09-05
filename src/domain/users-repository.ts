import { User } from "./user";

export interface UsersRepository {
  getById(id: string): Promise<User | null>;
}
