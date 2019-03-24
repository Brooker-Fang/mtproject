const util = {
  success (msg, data) {
    return {
      code: 200,
      msg,
      data
    }
  },
  error (msg) {
    return {
      code: -1,
      msg
    }
  }
}
module.exports = util
