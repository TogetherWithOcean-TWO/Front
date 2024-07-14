import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { WideButton } from "../../components/common/CustomButton";
import { CustomInput } from "../../components/common/CustomInput";
import { SubTitle } from "../../components/common/CustomText";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { ConfirmationModal } from "../../components/common/Modal";
import axios from "axios";

function SignupSetGoalScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { characterImage } = route.params;

  const { userInfo, setUserInfo } = useUserInfo();

  const handleSignup = async () => {
    try {
      console.log(userInfo);
      const response = await axios.post(
        "http://13.124.240.85:8080/member/join",
        userInfo
      );

      if (response.status === 200) {
        openModal();
      } else {
        alert(response.data.message || "회원가입 실패");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const onlyNumbers = (text) => {
    // 숫자만 입력되도록 필터링
    const numericGoal = text.replace(/[^0-9]/g, "");
    setUserInfo({ ...userInfo, stepGoal: numericGoal });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("SplashScreen");
  };

  const done = () => {
    openModal();
    if (isValid) {
      navigation.navigate("HomeScreen");
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.character}>
          <SubTitle text="목표 걸음을 설정해주세요" />
          <View style={styles.buttonContainer}>
            <Image style={styles.image} source={characterImage} />
          </View>
          <View style={styles.formGroup}>
            <CustomInput
              placeholder="숫자로만 적어주세요"
              value={userInfo.stepGoal}
              onChangeText={onlyNumbers}
              numeric={true}
            />
          </View>
        </View>
        <View style={styles.button}>
          <WideButton text="완료" onPress={handleSignup} />
        </View>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="회원가입을 축하드립니다 :)"
        buttonText="확인"
      />
    </KeyboardAvoidingView>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "$White01",
    justifyContent: "center",
  },
  character: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    width: "90%",
  },

  buttonContainer: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  input: {
    backgroundColor: "$Blue02",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    bottom: 20,
    justifyContent: "flex-end",
  },
});

export default SignupSetGoalScreen;
