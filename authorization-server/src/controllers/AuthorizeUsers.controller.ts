import { UsersRepository } from "../repositories/Users.repository";

export class AuthorizeUsersController {
  constructor(private usersRepository: UsersRepository) {}

  async authorizeUser(username: string, password: string): Promise<boolean> {
    const user = await this.usersRepository.getUser(username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}
