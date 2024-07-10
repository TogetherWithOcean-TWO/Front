import React from "react";
import { View } from "react-native";
import FooterText from "../../components/Splash/FooterText";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";
import { LogoWithText } from "../../components/common/Logo";

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
        <LogoWithText />
      </View>
      <View style={styles.buttonContainer}>
        <WideButton text="시작하기" onPress={navigateToSignUpScreen} />
        <FooterText text="이미 회원이에요!" onPress={navigateToLoginScreen} />
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
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  buttonContainer: {
    width: "80%",
    bottom: -150,
    alignItems: "center",
    position: "relative",
  },
});

export default SplashScreen;
