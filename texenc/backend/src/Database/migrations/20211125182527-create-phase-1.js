'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phase1s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: false,
      },
      about: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      no_of_employees: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      projects: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: false,
      },

      social_media_urls: {
        type: Sequelize.JSONB,
        // allowNull: false,
      },


      language: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: true,
      },

      experience: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: true,
      },

      education: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        // allowNull: true,
      },
      application_submitted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      phase1_status: {
        type: Sequelize.STRING,
        defaultValue: "not submited"
      },
      submittion_time: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('phase1s');
  }
};