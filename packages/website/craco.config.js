const path = require("path");

const { getLoader, loaderByName } = require("craco");

const packages = [
  path.join(__dirname, "../shared-components"),
  path.join(__dirname, "../shared-firebase-converter"),
  path.join(__dirname, "../shared-functions"),
  path.join(__dirname, "../shared-types")
];

module.exports = {
  webpack : {
    configure : (webpackConfig, _) => {
      const { isFound , match } = getLoader(webpackConfig, loaderByName("babel-loader"));
      
      if(isFound){
        const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig; 
    }
  }
}