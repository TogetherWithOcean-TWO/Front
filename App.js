import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import LoginScreen from "./src/screens/loginScreen/LoginScreen";
import SignupScreen from "./src/screens/signupScreen/SignupScreen";
import FindForLoginScreen from "./src/screens/loginScreen/FindForLoginScreen";

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
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}

        {/* 아이디/비밀번호 찾기 */}
        <Stack.Screen
          name="Findforlogin"
          component={FindForLoginScreen}
          options={{ headerShown: false }}
        />

        {/*splash 화면*/}
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
