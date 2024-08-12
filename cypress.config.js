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
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
