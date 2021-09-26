const Controller = require('./BaseController')
const UserService = require('../Services/UserService')

class UserController extends Controller {
  /**
   *
   * @returns {Promise<{token:string}>}
   */
  async login() {
    const { email, password } = this.request.body
    const token = await UserService.login(email, password)
    return this.response.json(token)
  }
}

module.exports = UserController
