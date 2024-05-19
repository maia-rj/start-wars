const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/application/components"),
    "@atoms": path.resolve(__dirname, "src/application/components/atoms"),
    "@molecules": path.resolve(
      __dirname,
      "src/application/components/molecules"
    ),
    "@organisms": path.resolve(
      __dirname,
      "src/application/components/organisms"
    ),
    "@pages": path.resolve(__dirname, "src/application/pages"),
    "@styles": path.resolve(__dirname, "src/application/styles"),
    "@hooks": path.resolve(__dirname, "src/application/hooks"),
    "@domain": path.resolve(__dirname, "src/domain"),
    "@services": path.resolve(__dirname, "src/domain/services"),
    "@repositories": path.resolve(__dirname, "src/domain/repositories"),
    "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
    "@api": path.resolve(__dirname, "src/infrastructure/api"),
    "@store": path.resolve(__dirname, "src/infrastructure/store"),
  };
  return config;
};
