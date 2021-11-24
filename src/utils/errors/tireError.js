const statusCode = require('../../globals/statusCode');
const responseMessage = require('../../globals/responseMessage');
const Error = require('./errors');

// 타이어 규격 정보가 비었을 때
class EmptyTireValueError extends Error {
  constructor(
    message = responseMessage.EMPTY_TIRE_VALUE,
    status = statusCode.BAD_REQUEST,
  ) {
    super(message);
    this.status = status;
  }
}

// 타이어 규격 양식이 맞지 않는 경우
class InvalidTireValueError extends Error {
  constructor(
    message = responseMessage.INVALID_TIRE_VALUE,
    status = statusCode.BAD_REQUEST,
  ) {
    super(message);
    this.status = status;
  }
}

module.exports.EmptyTireValueError = EmptyTireValueError;
module.exports.InvalidTireValueError = InvalidTireValueError;
