'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('job_offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER
      },
      job_id: {
        type: Sequelize.INTEGER
      },
      related_service: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.JSONB,
      },
      completion_time: {
        type: Sequelize.JSONB,
      },
      cover_letter: {
        type: Sequelize.TEXT,
      },
      attachments: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
      },
      submitted: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('job_offers');
  }
};