const statusCode = require('../../globals/statusCode');
const responseMessage = require('../../globals/responseMessage');
const Error = require('./errors');

// 받은 데이터 limit개 초과
class RequestOverflowError extends Error {
  constructor(
    message = responseMessage.TOO_MUCH_DATA,
    status = statusCode.BAD_REQUEST,
  ) {
    super(message);
    this.status = status;
  }
}

class DuplicatedError extends Error {
  // 403
  constructor(
    message = responseMessage.DUPLICATE_ERROR,
    status = statusCode.FORBIDDEN,
  ) {
    super(message);
    this.status = status;
  }
}

module.exports.RequestOverflowError = RequestOverflowError;
module.exports.DuplicatedError = DuplicatedError;
