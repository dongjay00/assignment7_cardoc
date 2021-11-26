const { statusCode, responseMessage } = require('../globals');
const { resFormatter } = require('../utils');
const trimService = require('../services/trimService.js');
const tireService = require('../services/tireService.js');
const logger = require('../utils/logger');
// const { ValidationError } = require('../utils/errors/commonError');

// 타이어 정보 조회
exports.readTireList = async (req, res, next) => {
  try {
    const { userId } = req.decoded;

    const tires = await trimService.readTireList(userId);

    return res
      .status(statusCode.OK)
      .send(resFormatter.success(responseMessage.READ_TIRE_SUCCESS, tires));
  } catch (err) {
    next(err);
  }
};
