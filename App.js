import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import LoginScreen from "./src/screens/loginScreen/LoginScreen";
import SignupScreen from "./src/screens/signupScreen/SignupScreen";
import FindForLoginScreen from "./src/screens/loginScreen/FindForLoginScreen";
import SignupAddressScreen from "./src/screens/signupScreen/SignupAddressScreen";
import SignupCharacterScreen from "./src/screens/signupScreen/SignupCharacterScreen";
import SignupCharacterNameScreen from "./src/screens/signupScreen/SignupCharacterNameScreen";
import SignupSetGoalScreen from "./src/screens/signupScreen/SignupSetGoalScreen";
import HomeScreen from "./src/screens/HomeScreen";
import WalkingScreen from "./src/screens/WalkingScreen/WalkingScreen";
import PhotoSubmitScreen from "./src/screens/WalkingScreen/PhotoSubmitScreen";
import CameraScreen from "./src/screens/WalkingScreen/CameraScreen";
import MyOceanScreen from "./src/screens/MyOceanScreen/MyOceanScreen";
import CalendarScreen from "./src/screens/CalendarScreen/CalendarScreen";

import { UserInfoProvider } from "./src/contexts/UserInfoContext";
import StoreScreen from "./src/screens/storeScreen/StoreScreen";
import CharactorCustomScreen from "./src/screens/charactorCustomScreen/CharactorCustomScreen";
import MarinBookScreen from "./src/screens/marinBookScreen/MarinBookScreen";
import { UserItemInfoProvider } from "./src/contexts/UserItemContext";
import { UserLocationProvider } from "./src/contexts/UserLocationContext";
import SettingScreen from "./src/screens/SettingScreen/SettingScreen";
import { EditProfileScreen } from "./src/screens/SettingScreen/EditProfileScreen";
import { EditGoalScreen } from "./src/screens/SettingScreen/EditGoalScreen";
import { EditAddressScreen } from "./src/screens/SettingScreen/EditAddressScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserItemInfoProvider>
      <UserInfoProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Findforlogin"
              component={FindForLoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SignupAddress"
              component={SignupAddressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupCharacter"
              component={SignupCharacterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupCharacterName"
              component={SignupCharacterNameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupSetGoal"
              component={SignupSetGoalScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Walking"
              component={WalkingScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="StoreScreen"
              component={StoreScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CharactorCustomScreen"
              component={CharactorCustomScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MarinBookScreen"
              component={MarinBookScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="PhotoSubmit"
              component={PhotoSubmitScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MyOcean"
              component={MyOceanScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAddress"
              component={EditAddressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditGoal"
              component={EditGoalScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserInfoProvider>
    </UserItemInfoProvider>
  );
};

export default App;
