

const { Model, DataTypes } = require("sequelize");

class ProjectCollection extends Model {
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
        projectId: {
          type: DataTypes.INTEGER
        }
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Seller, {
      foreignKey: "sellerId",
      as: "ProjectCollection",
    });
  }
}

module.exports = ProjectCollection;
