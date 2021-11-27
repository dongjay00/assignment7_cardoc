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

// 타이어 정보 조회
exports.readTireList = async userId => {
  try {
    const tires = await models.tire.findAll({
      where: {
        userId: userId,
      },
    });

    return tires;
  } catch (err) {
    throw err;
  }
};
