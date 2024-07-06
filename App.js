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
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen
          name="Landing"
          component={SplashScreen}
          //options={{ headerShown: false }}
          options={{ title: "overView" }}
        /> */}
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}

      {/* 아이디/비밀번호 찾기 */}
      <Stack.Screen
        name="Findforlogin"
        component={FindForLoginScreen}
        options={{ headerShown: false }}
      />

      {/*splash 화면*/}
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />  */}
      {/*<Stack.Screen name="Login" component={LoginScreen} />*/}

      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
          //options={{ title: "Overview" }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupAddress" component={SignupAddressScreen} />
        <Stack.Screen
          name="SignupCharacter"
          component={SignupCharacterScreen}
        />
        <Stack.Screen
          name="SignupCharacterName"
          component={SignupCharacterNameScreen}
        />
        <Stack.Screen name="SignupSetGoal" component={SignupSetGoalScreen} />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
