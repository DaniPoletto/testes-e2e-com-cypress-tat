const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "p62hxo",
  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 30000,
    requestTimeout: 20000,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
});
