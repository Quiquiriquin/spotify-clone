module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      "expo-router/babel",
      "react-native-classname-to-style",
      ["react-native-platform-specific-extensions", { extensions: ["css"] }],
    ],
  };
};
