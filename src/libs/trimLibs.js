module.exports = {
  // 자동차와 타이어 데이터 분리
  divideTrimValues: (userId, requiredValues) => {
    let frontTireValue = requiredValues.frontTireValue;
    let rearTireValue = requiredValues.rearTireValue;

    const [frontWidth, frontAspectRatio, frontDiameter] = frontTireValue
      .split(/\/|\D/)
      .map(num => parseInt(num));

    const [rearWidth, rearAspectRatio, rearDiameter] = rearTireValue
      .split(/\/|\D/)
      .map(num => parseInt(num));

    let trim = {
      id: requiredValues.trimId,
      name: requiredValues.trimName,
      userId: userId,
    };

    let frontTire = {
      name: requiredValues.frontTireName,
      width: frontWidth,
      aspectRatio: frontAspectRatio,
      diameter: frontDiameter,
      unit: requiredValues.frontTireUnit,
      multiValues: requiredValues.frontTireMultiValues,
      trimId: requiredValues.trimId,
      userId: userId,
    };

    let rearTire = {
      name: requiredValues.rearTireName,
      width: rearWidth,
      aspectRatio: rearAspectRatio,
      diameter: rearDiameter,
      unit: requiredValues.rearTireUnit,
      multiValues: requiredValues.rearTireMultiValues,
      trimId: requiredValues.trimId,
      userId: userId,
    };

    return { trim, frontTire, rearTire };
  },
};
