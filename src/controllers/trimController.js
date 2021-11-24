const { statusCode, responseMessage } = require('../globals');
const { resFormatter } = require('../utils');
const trimService = require('../services/trimService.js');
const tireService = require('../services/tireService.js');
const logger = require('../utils/logger');
const { ValidationError } = require('../utils/errors/commonError');
const { RequestOverflowError } = require('../utils/errors/trimError');
const {
  EmptyTireValueError,
  InvalidTireValueError,
} = require('../utils/errors/tireError');
const trimLibs = require('../libs/trimLibs.js');

const { getCardocApiData } = require('../jobs/cardocApiJobs');

const regExp = /^[0-9]{3}\/[0-9]{2}[a-zA-Z]{1}[0-9]{2}/;

// 자동차 및 타이어 정보 저장
exports.createTrimTire = async (req, res, next) => {
  try {
    const { informations } = req.body;
    const limit = 5;

    // 최대 요청 범위 벗어나면 에러처리
    if (informations.length > limit) throw new RequestOverflowError();

    const trims = [];
    const tires = [];

    for (let i = 0; i < informations.length; i++) {
      let userId = informations[i].id;
      let trimId = informations[i].trimId;

      let requiredValues = await getCardocApiData(trimId);

      // 타이어 규격 정보가 비었을 때
      if (!requiredValues.frontTireValue || !requiredValues.rearTireValue)
        throw new EmptyTireValueError();

      // 타이어 규격 양식이 맞지 않는 경우
      if (
        !regExp.test(requiredValues.frontTireValue) ||
        !regExp.test(requiredValues.rearTireValue)
      )
        throw new InvalidTireValueError();

      const { trim, frontTire, rearTire } =
        trimLibs.divideTrimValues(requiredValues);

      trims.push(trim);
      tires.push(frontTire);
      tires.push(rearTire);
    }

    // 쿼리 실행
    await trimService.createTrim(trims);
    await tireService.createTire(tires);

    return res
      .status(statusCode.CREATED)
      .send(resFormatter.success(responseMessage.TRIM_TIRE_SAVE_SUCCESS, {}));
  } catch (err) {
    next(err);
  }
};
