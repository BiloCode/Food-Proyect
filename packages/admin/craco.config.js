const path = require("path");

const { getLoader, loaderByName } = require("craco");

const packages = [
  path.join(__dirname, "../components"),
  path.join(__dirname, "../shared")
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