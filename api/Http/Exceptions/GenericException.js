class GenericException {
  /**
   *
   * @param message
   * @returns {Error}
   */
  constructor(messageCode, status = 400) {
    const errorMessage = messageCode
    const error = new Error(errorMessage)
    error.status = status
    return error
  }
}

module.exports = GenericException
