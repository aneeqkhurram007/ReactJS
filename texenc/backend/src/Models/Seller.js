


const { Model, DataTypes } = require("sequelize");

class Seller extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: {
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
      foreignKey: "userId",
      as: "seller",
    });
    this.hasOne(models.Phase1, {
      foreignKey: "sellerId",
      as: "phase1",
    });
    this.hasOne(models.Phase2, {
      foreignKey: "sellerId",
      as: "phase2",
    });
    this.hasMany(models.Service, {
      foreignKey: "sellerId",
      as: "services",
    });
    this.hasMany(models.SellerPortfolio, {
      foreignKey: "sellerId",
      as: "portfolio",
    });
    // this.hasMany(models.SellerCollection, {
    //   foreignKey: "collectionSellerId",
    //   as: "SellerCollection",
    // });
    this.hasMany(models.ProjectCollection, {
      foreignKey: "sellerId",
      as: "ProjectCollection",
    });
  }
}

module.exports = Seller;
