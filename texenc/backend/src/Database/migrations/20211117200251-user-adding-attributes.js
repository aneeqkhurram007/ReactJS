'use strict';


// username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     emailVerified: DataTypes.BOOLEAN,
//     phoneVerified: DataTypes.BOOLEAN,
//     phone: DataTypes.INTEGER,
//     emailNotification: DataTypes.BOOLEAN,
//     type: DataTypes.STRING,

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'users',
      'username',
      {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        unique: true
      }
    );
    queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
    queryInterface.addColumn(
      'users',
      'email_verified',
      {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        default: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
    queryInterface.addColumn(
      'users',
      'phone_verified',
      {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        default: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
    queryInterface.addColumn(
      'users',
      'verification_code',
      {
        type: Sequelize.STRING,
        default: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
    queryInterface.addColumn(
      'users',
      'phone',
      {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        unique: true
      }
    );
    queryInterface.addColumn(
      'users',
      'type',
      {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );

    queryInterface.addColumn(
      'users',
      'phone_confirmation_code',
      {
        type: Sequelize.INTEGER,
        // allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
