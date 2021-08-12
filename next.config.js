const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


customConfig = {
  reactStrictMode: true,
}

module.exports =withPlugins([
  [optimizedImages,{optimizedImages:false}],


],customConfig);
