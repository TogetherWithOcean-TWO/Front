//App.config.js
import 'dotenv/config';

//const { GOOGLE_MAPS_API_KEY, EXPO_PROJECT_ID } = process.env;

export default {
  expo: {
    plugins: [
      [
        'expo-font',
        {
          fonts: [
            './src/assets/fonts/JejuGothic.ttf',
          ],
        },
      ],
    ],
    android: {
      permissions: [
        'android.permission.CAMERA',
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.ACCESS_COARSE_LOCATION'
      ],
      package: 'com.TWO.front',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.TWO.front',
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription: "앱이 실행되는 동안 위치를 사용합니다.",
        NSLocationAlwaysAndWhenInUseUsageDescription: "항상 위치 정보가 필요합니다.",
      },
    },
    extra: {
      eas: {
        projectId: process.env.EXPO_PROJECT_ID,
      },
    },
    owner: 'togetherwithocean',
  },
};
