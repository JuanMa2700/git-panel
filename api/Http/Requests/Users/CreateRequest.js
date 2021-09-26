const BaseRequest = require("../BaseRequest");

class UserLoginRequest extends BaseRequest {
  rules() {
    return {
      name: "required|string",
      lastname: "required|string",
      email: "required|string|email",
      password: "required|string",
    };
  }
}

module.exports = UserLoginRequest;
