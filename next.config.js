const withStyles = require("@webdeb/next-styles");
module.exports = withStyles({
  sass: true,
  modules: true,
  webpack: (config) => {
    return config;
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["src/styles"],
    },
  },
});
