//App.config.js
import "dotenv/config";
//import dotenv from "dotenv";

const { GOOGLE_MAPS_API_KEY, EXPO_PROJECT_ID } = process.env;

console.log("Google Maps API Key:", process.env.GOOGLE_MAPS_API_KEY);
console.log("Expo Project ID:", process.env.EXPO_PROJECT_ID);

export default {
  expo: {
    plugins: [
      [
        "expo-font",
        {
          fonts: ["./src/assets/fonts/JejuGothic.ttf"],
        },
      ],
      [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera."
        }
      ],
      [
        "@react-native-seoul/kakao-login",
        {
          "kakaoAppKey": "23d26ac2031f78ec87400bac783e1edf",
          "overrideKakaoSDKVersion": "2.11.2", // Optional, 
          "kotlinVersion": "1.9.0" // #392
        }
      ],
      [
        "expo-build-properties",
        {
          "android": {
            "extraMavenRepos": ["https://devrepo.kakao.com/nexus/content/groups/public/"]
          }
        }
      ]     
          
    ],
    android: {
      permissions: [
        "android.permission.CAMERA",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_COARSE_LOCATION",
      ],
      package: 'com.TWO.front',
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.TWO.front",
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        
      },
      infoPlist: {
        NSCameraUsageDescription: "이 앱은 카메라 접근 권한이 필요합니다.",
        NSLocationWhenInUseUsageDescription:
          "앱이 실행되는 동안 위치를 사용합니다.",
        NSLocationAlwaysAndWhenInUseUsageDescription:
          "항상 위치 정보가 필요합니다.",
      },
    },
    extra: {
      eas: {
        projectId: process.env.EXPO_PROJECT_ID,
      },
    },
    owner: "togetherwithocean",
  },
};
