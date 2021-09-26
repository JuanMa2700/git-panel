const UserRepository = require("../../Repositories/UserRepository");
const GenericException = require("./../Exceptions/GenericException");
const NotFoundException = require("./../Exceptions/NotFoundException");

class UserService {
  /**
   * Used to check user credentials
   * @param email
   * @param password
   * @returns {Promise<{}>}
   */
  static async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new NotFoundException();
    if (user.password !== password) {
      throw new GenericException("user.invalid_credentials");
    }
    return user;
  }

  /**
   * Used to create a user
   * @param name
   * @param lastname
   * @param email
   * @param password
   * @returns {Promise<{}>}
   */
  static async create(name, lastname, email, password) {
    let user = await UserRepository.findByEmail(email);
    if (user) throw new GenericException("user.email_already_used");
    user = await UserRepository.create({ name, lastname, email, password });
    return user;
  }
}

module.exports = UserService;
