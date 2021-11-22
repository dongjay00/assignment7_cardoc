const statusCode = require('../../globals/statusCode');
const responseMessage = require('../../globals/responseMessage');
const Error = require('./errors');


class AccountNotExistsError extends Error {
  constructor(message = responseMessage.ACCOUNT_NOT_FOUND, status = statusCode.NOT_FOUND) {
    super(message);
    this.status = status;
  }
}

module.exports.AccountNotExistsError = AccountNotExistsError;