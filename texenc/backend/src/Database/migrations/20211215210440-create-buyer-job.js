'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buyer_jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyer_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      sub_category: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      seller_type: {
        type: Sequelize.STRING
      },
      job_type: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.JSON
      },
      project_length: {
        type: Sequelize.JSON
      },
      description: {
        type: Sequelize.STRING
      },
      attachments: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
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
    await queryInterface.dropTable('buyer_jobs');
  }
};