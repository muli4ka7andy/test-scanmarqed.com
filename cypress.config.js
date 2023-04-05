const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    blockThirdPartyCookies: false,
    forMobile: false,
    env: {
      hideXHR: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
