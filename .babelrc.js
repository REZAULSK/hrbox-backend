const path = require("path");
const jsConfig = require("./jsconfig.json");

const pathAlias = Object.fromEntries(
  Object.entries(jsConfig.compilerOptions.paths).map(([key, value]) => {
    const modifiedKey = key.split("/*")[0];
    const modifiedValue = value[0].match(/^.\//)
      ? value[0].split("/*")[0]
      : `./${value[0].split("/*")[0]}`;
    return [modifiedKey, modifiedValue];
  })
);

module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: [path.resolve(jsConfig.compilerOptions.baseUrl)],
        alias: pathAlias,
      },
    ],
  ],
};
