import React, { useEffect } from "react";
import { View } from "react-native";
import FooterText from "../../components/Splash/FooterText";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";
import { LogoWithText } from "../../components/common/Logo";
import { useUserInfo } from "../../contexts/UserInfoContext";

const SplashScreen = ({ navigation }) => {
  const navigateToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate("Signup");
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // 화면이 포커스를 받을 때 실행되는 코드
      resetUserInfo();

    });

    return unsubscribe;
  }, [navigation]);

  //userinfo 새롭게 세팅
  const { userInfo, setUserInfo } = useUserInfo();
  const resetUserInfo = () => {
    setUserInfo({
      //회원가입 컴포넌트
      realName: "",
      nickname: "",
      email: "",
      passwd: "",
      checkPasswd: "",
      phoneNumber: "",
      postalCode: "",
      address: "",
      detailAddress: "",
      charId: "",
      charName: "",
      stepGoal: 0,

      // 포인트
      point: 10000,
    });
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
