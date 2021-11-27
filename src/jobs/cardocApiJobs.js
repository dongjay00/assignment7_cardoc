const axios = require('axios');
const { EntityNotExistError } = require('../utils/errors/commonError');

async function getCardocApiData(_trimId) {
  try {
    let url = `https://dev.mycar.cardoc.co.kr/v1/trim/${_trimId}`;

    const res = await axios.get(url);
    const trimInformation = res.data;
    const { trimId, trimName, spec } = trimInformation;
    const frontTire = spec.driving.frontTire;
    const rearTire = spec.driving.rearTire;

    const requiredValues = {
      trimId,
      trimName,
      frontTireName: frontTire.name,
      frontTireValue: frontTire.value,
      frontTireUnit: frontTire.unit,
      frontTireMultiValues: frontTire.multiValues,
      rearTireName: rearTire.name,
      rearTireValue: rearTire.value,
      rearTireUnit: rearTire.unit,
      rearTireMultiValues: rearTire.multiValues,
    };

    return requiredValues;
  } catch (err) {
    throw new EntityNotExistError();
  }
}

module.exports.getCardocApiData = getCardocApiData;
