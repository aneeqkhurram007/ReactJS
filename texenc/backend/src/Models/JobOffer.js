const { Model, DataTypes } = require("sequelize");

class JobOffer extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER
        },
        jobId: {
          type: DataTypes.INTEGER
        },
        relatedService: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.JSONB,
        },
        completionTime: {
          type: DataTypes.JSONB,
        },
        coverLetter: {
          type: DataTypes.TEXT,
        },
        attachments: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
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
    this.belongsTo(models.BuyerJob, {
      foreignKey: "jobId",
      as: "JobDetail",
    });
  }
}

module.exports = JobOffer;
