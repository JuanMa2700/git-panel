/* Integrate ORM here using models instead mock */

const users = require("../mock-users");

class UserRepository {
  /**
   *
   * @param email
   * @returns {Promise<User|null>}
   */
  static async findByEmail(email) {
    const user = await users.find((u) => u.email === email);
    return user;
  }

  /**
   *
   * @param user
   * @returns {Promise<User|null>}
   */
  static async create(user) {
    await users.push(user);
    return user;
  }
}

module.exports = UserRepository;
