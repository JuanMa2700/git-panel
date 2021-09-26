const UserRepository = require("../../Repositories/UserRepository");
const GenericException = require("./../Exceptions/GenericException");
const NotFoundException = require("./../Exceptions/NotFoundException");

class UserService {
  /**
   *
   * @param email
   * @param password
   * @returns {Promise<{token:string}>}
   */
  static async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new NotFoundException();
    if (user.password !== password) {
      throw new GenericException("user.invalid_credentials");
    }
    return user;
  }
}

module.exports = UserService;
