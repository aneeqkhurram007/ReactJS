

const { Model, DataTypes } = require("sequelize");

class Phase1 extends Model {
  static init(sequelize) {
    super.init(
      {
        sellerId: {
          type: DataTypes.INTEGER
        },
        type: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        skills: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: false,
        },
        about: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        noOfEmployees: {
          type: DataTypes.INTEGER,
          // allowNull: false,
        },
        projects: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: false,
        },
        socialMediaUrls: {
          type: DataTypes.JSONB,
          // allowNull: false,
        },

        language: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: true,
        },
        experience: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: true,
        },
        education: {
          type: DataTypes.ARRAY(DataTypes.JSONB),
          // allowNull: true,
        },
        //add in  migration 
        applicationSubmitted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        phase1Status: {
          type: DataTypes.STRING,
          defaultValue: "not submitted"
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
      as: "phase1",
    });
  }
}

module.exports = Phase1;
