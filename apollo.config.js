// The project do not use apollo,
// This config only for VScode apollo extension usage.
module.exports = {
  client: {
    service: {
      name: 'gatsby-schema',
      url: 'http://localhost:8000/___graphql',
    },
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-*/src/fragments.js',
    ],
    tagName: 'graphql',
  },
};
