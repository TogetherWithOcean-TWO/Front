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

function LoginScreen() {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const navigateToKakaoLoginScreen = () => {
    navigation.navigate("HomeScreen");
  };
  const navigateToFindForLoginScreen = () => {
    navigation.navigate("Findforlogin");
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handelLogin = async () => {
    try {
      const response = await axios.post(
        "http://13.124.240.85:8080/member/sign-in",
        {
          email,
          passwd,
        }
      );
      if (response.status === 200) {
        // console.log("로그인 완료");
        navigateToMainScreen();
      } else {
        openModal();
        // alert(response.data.message || "로그인 실패");
      }
    } catch (error) {
      // console.error("Error:", error);
      openModal();
      // alert("로그인중 발생했습니다.");
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
          <WideButton text="로그인" onPress={handelLogin} />
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
