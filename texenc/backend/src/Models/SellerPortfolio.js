
const { Model, DataTypes } = require("sequelize");

class SellerPortfolio extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER
        },
        title: {
          type: DataTypes.STRING
        },
        relatedJob: {
          type: DataTypes.STRING
        },
        category: {
          type: DataTypes.STRING
        },
        time: {
          type: DataTypes.JSONB
        },
        subCategory: {
          type: DataTypes.ARRAY(DataTypes.STRING)
        },
        budget: {
          type: DataTypes.JSONB
        },
        description: {
          type: DataTypes.STRING
        },
        imagesAndVideos: {
          type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        files: {
          type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        url: {
          type: DataTypes.ARRAY(DataTypes.JSONB)
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
      as: "portfolio",
    });
  }
}

module.exports = SellerPortfolio;
