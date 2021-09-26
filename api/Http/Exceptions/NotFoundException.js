class NotFoundException {
  /**
   *
   * @param message
   * @returns {Error}
   */
  constructor(messageCode, status = 404) {
    const errorMessage = messageCode || 'resource.notfound'
    const error = new Error(errorMessage)
    error.status = status
    return error
  }
}

module.exports = NotFoundException
