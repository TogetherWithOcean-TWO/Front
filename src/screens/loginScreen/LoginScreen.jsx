import React from "react";
import { Text, View, Image } from "react-native";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";
import FooterText from "../../components/Splash/FooterText";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    // navigation.navigate("Main");
    navigation.navigate("Findforlogin");
  };

  const navigateToKakaoLoginScreen = () => {
    // navigation.navigate("KakaoLogin");
  };
  const navigateToFindForLoginScreen = () => {
    navigation.navigate("Findforlogin");
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
        <WideButton text="로그인" onPress={navigateToMainScreen} />
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

export default LoginScreen;
