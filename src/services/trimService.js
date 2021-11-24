const models = require('../models');

// 자동차 정보 생성
exports.createTrim = async trims => {
  try {
    const newTrims = await models.trim.bulkCreate(trims);
    return;
  } catch (err) {
    throw err;
  }
};
