
const { Model, DataTypes } = require("sequelize");

class SellerCollection extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId:
        {
          type: DataTypes.INTEGER
        },
        name: {
          type: DataTypes.STRING
        },
        userId: {
          type: DataTypes.INTEGER
        }
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "userId",
      as: "User",
    });
  }
}

module.exports = SellerCollection;
