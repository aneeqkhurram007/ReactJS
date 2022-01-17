'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seller_portfolios', {
      id: {
        allow_null: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      related_job: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.JSONB
      },
      category: {
        type: Sequelize.STRING
      },
      sub_category: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      budget: {
        type: Sequelize.JSONB
      },
      description: {
        type: Sequelize.STRING
      },
      images_and_videos: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      files: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      url: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
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
    await queryInterface.dropTable('seller_portfolios');
  }
};