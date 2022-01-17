
const { Model, DataTypes } = require("sequelize");

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER
        },
        packagesId: {
          type: DataTypes.INTEGER
        },
        title: {
          type: DataTypes.STRING
        },
        category: {
          type: DataTypes.STRING
        },
        subCategory: {
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
        searchTags: {
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
        type: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        noOfHours: {
          type: DataTypes.JSON
        },
        imagesAndVideos: {
          type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        files: {
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
        submitted: {
          type: DataTypes.BOOLEAN
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
      as: "service",
    });
    this.hasOne(models.Package, {
      foreignKey: "serviceId",
      as: "package",
    });
  }
}

module.exports = Service;
