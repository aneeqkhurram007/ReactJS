
const { Model, DataTypes } = require("sequelize");

class Phase2 extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER
        },
        profileImage: {
          type: DataTypes.STRING,
          // allowNull: true,
        },
        portfolioAttachments: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          // allowNull: true,
        },
        license: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: false,
        },
        supportingUrls: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          // allowNull: true,
        },
        supportingMaterial: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: true,
        },
        phase2Status: {
          type: DataTypes.STRING,
          defaultValue: "not submitted"
        },
        applicationSubmitted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        SubmittionTime: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Seller, {
      foreignKey: "sellerId",
      as: "phase2",
    });
  }
}

module.exports = Phase2;
