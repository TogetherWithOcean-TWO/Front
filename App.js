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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
<<<<<<< Updated upstream
      <Stack.Navigator initialRouteName="Findforlogin">
=======
      <Stack.Navigator initialRouteName="Walking">
>>>>>>> Stashed changes
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
<<<<<<< Updated upstream
=======
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

>>>>>>> Stashed changes
        <Stack.Screen
          name="Findforlogin"
          component={FindForLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignupAddress" component={SignupAddressScreen} />
        <Stack.Screen
          name="SignupCharacter"
          component={SignupCharacterScreen}
        />
        <Stack.Screen
          name="SignupCharacterName"
          component={SignupCharacterNameScreen}
        />
<<<<<<< Updated upstream
        <Stack.Screen name="SignupSetGoal" component={SignupSetGoalScreen} />
=======
         <Stack.Screen
          name="Walking"
          component={WalkingScreen}
          options={{ headerShown: false }}
        />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
