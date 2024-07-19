// app.config.js
const { EXPO_PROJECT_ID, GOOGLE_MAPS_API_KEY } = require("./apikey");

module.exports = {
  expo: {
    plugins: [
      [
        "expo-font",
        {
          fonts: ["./src/assets/fonts/JejuGothic.ttf"],
        },
      ],
    ],
    android: {
      permissions: ["android.permission.CAMERA"],
      package: "com.TWO.front",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.TWO.front",
      config: {
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
      },
    },
    extra: {
      eas: {
        projectId: EXPO_PROJECT_ID,
      },
    },
    owner: "togetherwithocean",
  },
};
