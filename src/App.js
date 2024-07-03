import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./screens/landingScreen/Landing";
import Login from "./screens/loginScreen/Login";
import Signup from "./screens/signupScreen/Signup";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={Landing} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignupScreen" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
