const BaseRequest = require('../BaseRequest')

class UserLoginRequest extends BaseRequest {
  rules() {
    return {
      email: 'required|string|email',
      password: 'required|string',
    }
  }
}

module.exports = UserLoginRequest
