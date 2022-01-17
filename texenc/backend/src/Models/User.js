const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        emailVerified: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
        phoneVerified: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        emailNotification: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
        verificationCode: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Seller, {
      foreignKey: "userId",
      as: "seller",
    });
    this.hasMany(models.SellerCollection, {
      foreignKey: "userId",
      as: "SellerCollection",
    });
  }
}

module.exports = User;
