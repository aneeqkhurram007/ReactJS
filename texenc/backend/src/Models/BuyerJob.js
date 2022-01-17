const { Model, DataTypes } = require("sequelize");

class BuyerJob extends Model {
  static init(sequelize) {
    super.init(
      {
        buyerId: {
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
        sellerType: {
          type: DataTypes.STRING
        },
        jobType: {
          type: DataTypes.STRING
        },
        location: {
          type: DataTypes.STRING
        },
        budget: {
          type: DataTypes.JSON
        },
        projectLength: {
          type: DataTypes.JSON
        },
        description: {
          type: DataTypes.STRING
        },
        attachments: {
          type: DataTypes.ARRAY(DataTypes.JSONB)
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.JobOffer, {
      foreignKey: "jobId",
      as: "JobOffers",
    });
  }
}

module.exports = BuyerJob;
