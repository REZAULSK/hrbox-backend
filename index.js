require("@babel/register")({
    presets: ["@babel/preset-env"],
    ignore: ["node_modules"],
});
  
require("dotenv").config();

// Import the rest of our application.
// eslint-disable-next-line import/extensions
module.exports = require("./server");