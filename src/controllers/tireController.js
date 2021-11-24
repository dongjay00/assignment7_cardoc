const { statusCode, responseMessage } = require('../globals');
const { resFormatter } = require('../utils');
const trimService = require('../services/trimService.js');
const tireService = require('../services/tireService.js');
const logger = require('../utils/logger');
const { ValidationError } = require('../utils/errors/commonError');

// 타이어 정보 조회
exports.readTireList = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
