import React, { useState } from "react";
import { View } from "react-native";
import { WideButton } from "../../components/common/CustomButton";
import EStyleSheet from "../../styles/global";
import FooterText from "../../components/Splash/FooterText";
import { useNavigation } from "@react-navigation/native";
import { LogoWithText } from "../../components/common/Logo";
import { LoginForm } from "../../components/Login/LoginForm";
import { KakaoLoginButton } from "../../components/Login/KakaoLoginButton";
import axios from "axios";
import { ConfirmationModal } from "../../components/common/Modal";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { saveItem } from "../../utils/asyncStorage"; // Import saveItem function

const LoginScreen = () => {
  const navigation = useNavigation();
  const { userInfo, setUserInfo } = useUserInfo();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const navigateToMainScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const navigateToFindForLoginScreen = () => {
    navigation.navigate("Findforlogin");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://13.124.240.85:8080/member/sign-in",
        {
          email,
          passwd,
        }
      );
      if (response.status === 200) {
        console.log("로그인 완료");
        //console.log(response.data);
        const member = response.data.memberRes;
        const tokenData = response.data.token; // token 객체를 추출

        // Ensure tokenData has the expected properties
        if (!tokenData || !tokenData.accessToken || !tokenData.refreshToken) {
          throw new Error("Token data is missing accessToken or refreshToken");
        }

        const accessToken = tokenData.accessToken;
        const refreshToken = tokenData.refreshToken;

        // Save the tokens to AsyncStorage
        await saveItem("accessToken", accessToken);
        await saveItem("refreshToken", refreshToken);

        // Save token and refresh token to context
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          realName: member.realName,
          nickname: member.nickname,
          email: member.email,
          passwd: member.passwd,
          phoneNumber: member.phoneNumber,
          postalCode: member.postalCode,
          address: member.address,
          detailAddress: member.detailAddress,
          charId: member.charId,
          charName: member.charName,
          stepGoal: member.stepGoal,
          todaySteps: member.step,
          point: member.point,
          accessToken: accessToken,
          refreshToken: refreshToken,
        }));
        navigateToMainScreen();
      } else {
        openModal();
      }
    } catch (error) {
      console.error("Error:", error);
      openModal();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LogoWithText />
      </View>
      <LoginForm
        email={email}
        setEmail={setEmail}
        passwd={passwd}
        setPasswd={setPasswd}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <WideButton text="로그인" onPress={handleLogin} />
        </View>
        <View style={styles.button}>
          <KakaoLoginButton onPress={navigateToMainScreen} />
        </View>
        <FooterText
          text="아이디 / 비밀번호를 잊어버렸나요?"
          onPress={navigateToFindForLoginScreen}
        />
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message={"아이디 또는 비밀번호를\n 다시 입력해주세요"}
        buttonText="닫기"
      />
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
