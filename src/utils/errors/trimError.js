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

module.exports.RequestOverflowError = RequestOverflowError;
