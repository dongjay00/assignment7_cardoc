module.exports = (sequelize, DataTypes) => {
  const tire = sequelize.define('tire', {
    id: { 
      type: DataTypes.INTEGER,
			autoIncrement: true, 
      primaryKey: true, 
      allowNull: false 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    value: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
		unit: {
			type: DataTypes.STRING,
		},
		multiValues: {
			type: DataTypes.STRING
		}
  },{timestamps:false});

	tire.associate = function (models) {
		models.tire.belongsToMany(models.trim, {
      through: 'trim_tire',
			as: 'TrimTire',
    });
  };

  return tire;
};