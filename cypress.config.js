const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s46bd7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
