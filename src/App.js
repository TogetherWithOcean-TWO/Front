import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import SignupScreen from "./screens/signupScreen/SignupScreen";
import FindForLoginScreen from "./screens/loginScreen/FindForLoginScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Landing"
          component={SplashScreen}
          //options={{ headerShown: false }}
          options={{ title: "overView" }}
        /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
        <Stack.Screen
          name="Findforlogin"
          component={FindForLoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
