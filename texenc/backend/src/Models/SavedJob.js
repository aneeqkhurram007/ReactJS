
const { Model, DataTypes } = require("sequelize");

class SavedJob extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        jobId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "sellerId",
      as: "seller",
    });
    this.belongsTo(models.BuyerJob, {
      foreignKey: "jobId",
      as: "jobDetails",
    });
  }
}

module.exports = SavedJob;
