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
import WalkingScreen from "./src/screens/WalkingScreen/WalkingScreen";

import { UserInfoProvider } from "./src/contexts/UserInfoContext";
import StoreScreen from "./src/screens/storeScreen/StoreScreen";
import CharactorCustomScreen from "./src/screens/charactorCustomScreen/CharactorCustomScreen";
import MarinBookScreen from "./src/screens/marinBookScreen/MarinBookScreen";
import { UserItemInfoProvider } from "./src/contexts/UserItemContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserItemInfoProvider>
      <UserInfoProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CharactorCustomScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
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
          </Stack.Navigator>
        </NavigationContainer>
      </UserInfoProvider>
    </UserItemInfoProvider>
  );
};

export default App;
