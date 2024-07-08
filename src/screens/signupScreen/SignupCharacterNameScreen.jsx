import React, { useState, useEffect } from "react";
import { View, Image, KeyboardAvoidingView, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { WideButton } from "../../components/common/CustomButton";
import { CustomInput } from "../../components/common/CustomInput";
import { SubTitle, ErrorText } from "../../components/common/CustomText";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { ConfirmationModal } from "../../components/common/Modal";

function SignupCharacterNameScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const { userInfo, setUserInfo } = useUserInfo();

  const { characterImage } = route.params;

  const [nameError, setNameError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validate();
  }, [userInfo.charName]);

  const validate = () => {
    let valid = true;
    // 이름 유효성 검사
    if (
      !userInfo.charName ||
      !/^[가-힣a-zA-Z]{2,10}$/.test(userInfo.charName)
    ) {
      setNameError("숫자, 특수문자를 제외하고 2~10자로 입력해주세요");
      valid = false;
    } else {
      setNameError(" ");
    }
    setIsValid(valid);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const next = () => {
    if (isValid) {
      navigation.navigate("SignupSetGoal", {
        characterImage,
      });
    } else {
      openModal();
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.character}>
          <SubTitle text="캐릭터의 이름을 지어주세요" />
          <View style={styles.buttonContainer}>
            <Image style={styles.image} source={characterImage} />
          </View>
          <View style={styles.formGroup}>
            <CustomInput
              placeholder="띄어쓰기 없이 적어주세요 ex)수달이"
              value={userInfo.charName}
              onChangeText={(text) =>
                setUserInfo({ ...userInfo, charName: text })
              }
            />
            {nameError ? <ErrorText text={nameError} /> : null}
          </View>
        </View>
        <View style={styles.button}>
          <WideButton text="다음" onPress={next} />
        </View>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="캐릭터 이름을 다시 입력해주세요"
        buttonText="닫기"
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

export default SignupCharacterNameScreen;
