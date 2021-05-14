// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "rickandmortyapi",
      url: "https://rickandmortyapi.com/graphql/",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"],
  },
};
