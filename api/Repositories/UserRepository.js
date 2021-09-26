/* Integrate here ORM */
const users = [
  {
    id: 1,
    name: "Juan",
    lastname: "Perez",
    email: "juan@mail.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Diana",
    lastname: "Robles",
    email: "diana@mail.com",
    password: "123456",
  },
  {
    id: 3,
    name: "Andrea",
    lastname: "Rodriguez",
    email: "andrea@mail.com",
    password: "123456",
  },
];
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
}

module.exports = UserRepository;
