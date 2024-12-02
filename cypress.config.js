const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
   projectId: "3cubu3",
   
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout:120000,
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns: true,
    video:false,
    retries:{
      runMode:0,
      openMode:0,

    },
   
    baseUrl: "https://www.webdriveruniversity.com",
    env: {
      first_name:"jas",
      webdriver_uniUrl:"https://www.webdriveruniversity.com"
    }
  },
});
