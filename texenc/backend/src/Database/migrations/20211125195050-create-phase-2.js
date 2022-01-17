'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phase2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER
      },
      profile_image: {
        type: Sequelize.STRING,
        // allowNull: true,
      },
      portfolio_attachments: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        // allowNull: true,
      },
      license: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: false,
      },
      supporting_urls: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        // allowNull: true,
      },
      supporting_material: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: true,
      },
      phase2_status: {
        type: Sequelize.STRING,
        defaultValue: "not submitted"
      },
      submittion_time: {
        type: Sequelize.DATE,
      },
      application_submitted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phase2s');
  }
};