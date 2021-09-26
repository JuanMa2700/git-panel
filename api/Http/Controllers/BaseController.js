class BaseController {
  /**
   *
   * @param request
   * @param response
   */
  constructor(request, response) {
    this.request = request
    this.response = response
  }
}

module.exports = BaseController
