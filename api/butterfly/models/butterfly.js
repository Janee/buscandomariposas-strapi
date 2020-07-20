'use strict';

const axios = require('axios');

module.exports = {

afterCreate: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
      });
  },


afterUpdate: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
      });
  },

afterDestroy: async entry => {
    axios
      .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
      .catch(() => {
        // Ignore
      });
  },
};
