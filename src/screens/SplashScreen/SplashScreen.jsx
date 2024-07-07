import React from "react";
import { Text, View, Image } from "react-native";
import FooterText from "../../components/Splash/FooterText";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";

const SplashScreen = ({ navigation }) => {
  const navigateToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>가치해양</Text>
        <Image
          source={require("../../assets/images/splash.gif")}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <WideButton text="시작하기" onPress={navigateToSignUpScreen} />
        <FooterText text="이미 회원이에요" onPress={navigateToLoginScreen} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$White01",
    // padding: 55
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "$Blue01",
  },
  buttonContainer: {
    width: "80%",
    bottom: -200,
    alignItems: "center",
    position: "relative",
  },
});

export default SplashScreen;
