
const { Model, DataTypes } = require("sequelize");

class Package extends Model {
  static init(sequelize) {
    super.init(
      {
        serviceId: {
          type: DataTypes.INTEGER
        },
        silver: {
          type: DataTypes.JSONB,
        },
        gold: {
          type: DataTypes.JSONB,
        },
        platinium: {
          type: DataTypes.JSONB,
        }
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Service, {
      foreignKey: "serviceId",
      as: "service",
    });
  }
}

module.exports = Package;
