module.exports = (sequelize, DataTypes) => {
  const trim = sequelize.define('trim', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      allowNull: false 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }
  },{timestamps:false});

	trim.associate = function (models) {
		models.trim.belongsTo(models.user, {
      foreignKey: {
        name: "userId", 
        allowNull:false
      },
      onUpdate: 'CASCADE'
    });
		
		models.trim.belongsToMany(models.tire, {
			through: 'trim_tire',
			as: 'TrimTire',
		});
  };

  return trim;
};