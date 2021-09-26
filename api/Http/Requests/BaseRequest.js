const ValidatorJS = require('validatorjs')

class BaseRequest {
  /**
   *
   * @param request
   * @param response
   * @param next
   */
  constructor(request, response, next) {
    this.request = request
    this.response = response
    this.next = next
  }

  /**
   *
   * @param input
   * @param rules
   */
  validate(input, rules) {
    const validation = new ValidatorJS(input, rules)
    validation.fails(() => {
      const { errors } = validation.errors
      const error = new Error('validation.errors')
      error.status = 400
      error.errors = errors
      return this.next(error)
    })
    validation.passes(() => this.next())
  }

  async check() {
    return await this.validate(this.request.body, this.rules())
  }

  /**
   * implements in child classes
   */
  rules() {}
}

module.exports = BaseRequest
