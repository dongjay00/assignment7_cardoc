const { Op } = require('sequelize');
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

// 자동차 정보 존재 여부 체크
exports.checkTrim = async (userId, trimId) => {
  try {
    const alreadyTrim = await models.trim.findOne({
      where: {
        [Op.and]: [{ id: trimId }, { userId: userId }],
      },
    });

    return alreadyTrim;
  } catch (err) {
    throw err;
  }
};
