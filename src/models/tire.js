module.exports = (sequelize, DataTypes) => {
  const tire = sequelize.define(
    'tire',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      aspectRatio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      diameter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
      },
      multiValues: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false },
  );

  tire.associate = function (models) {
    models.tire.belongsTo(models.trim, {
      foreignKey: {
        name: 'trimId',
        allowNull: false,
      },
      onUpdate: 'CASCADE',
    });

    models.tire.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onUpdate: 'CASCADE',
    });
  };

  return tire;
};
