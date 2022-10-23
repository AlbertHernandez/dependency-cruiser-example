import { InMemoryUsersRepository } from "./../../../src/infrastructure/database/in-memory-users-repository";

describe("InMemoryUsersRepository", () => {
  let repository: InMemoryUsersRepository;

  beforeEach(() => {
    repository = new InMemoryUsersRepository();
  });

  describe("getById", () => {
    it("should return the user when exists", async () => {
      const existingUserId = "1";
      const user = await repository.getById(existingUserId);
      expect(user).toBeDefined();
    });
  });
});
