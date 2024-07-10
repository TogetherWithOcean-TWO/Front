import React from "react";
import { Text, View, Image } from "react-native";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";
import FooterText from "../../components/Splash/FooterText";
import { useNavigation } from "@react-navigation/native";
import { LogoWithText } from "../../components/common/Logo";
import { LoginForm } from "../../components/Login/LoginForm";
import { KakaoLoginButton } from "../../components/Login/KakaoLoginButton";

function LoginScreen() {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    navigation.navigate("MainScreen");
  };

  const navigateToKakaoLoginScreen = () => {
    navigation.navigate("MainScreen");
  };
  const navigateToFindForLoginScreen = () => {
    navigation.navigate("Findforlogin");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LogoWithText />
      </View>
      <LoginForm />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <WideButton text="로그인" onPress={navigateToMainScreen} />
        </View>
        <View style={styles.button}>
          <KakaoLoginButton onPress={navigateToMainScreen} />
        </View>
        <FooterText
          text="아이디 / 비밀번호를 잊어버렸나요?"
          onPress={navigateToFindForLoginScreen}
        />
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$White01",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  buttonContainer: {
    width: "80%",
    bottom: -30,
    alignItems: "center",
    position: "relative",
  },
  button: {
    width: "100%",
    marginVertical: 5,
  },
});

export default LoginScreen;
