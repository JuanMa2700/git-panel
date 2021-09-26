const Controller = require("./BaseController");
const UserService = require("../Services/UserService");

class UserController extends Controller {
  /**
   *
   * @returns {Promise<{token:string}>}
   */
  async login() {
    const { email, password } = this.request.body;
    const user = await UserService.login(email, password);
    return this.response.json(user);
  }

  /**
   *
   * @returns {Promise<{token:string}>}
   */
  async create() {
    const { name, lastname, email, password } = this.request.body;
    const user = await UserService.create(name, lastname, email, password);
    return this.response.json(user);
  }
}

module.exports = UserController;
