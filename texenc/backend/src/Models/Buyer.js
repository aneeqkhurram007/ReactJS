const { Model, DataTypes } = require("sequelize");

class Buyer extends Model {
    static init(sequelize) {
        super.init(
            {
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                about: {
                    type: DataTypes.STRING,
                    // allowNull: false,
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
            as: "buyer",
        });
    }
}

module.exports = Buyer;
