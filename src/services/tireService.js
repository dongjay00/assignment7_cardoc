const models = require('../models');

// 타이어 정보 생성
exports.createTire = async tires => {
  try {
    const newTires = await models.tire.bulkCreate(tires);
    return;
  } catch (err) {
    throw err;
  }
};
