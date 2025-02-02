import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";
import { WideButton } from "../../components/common/CustomButton";
import { AddressForm } from "../../components/Signup/AddressForm";
import EStyleSheet from "../../styles/global";
import { ConfirmationModal } from "../../components/common/Modal";

function SignupAddressScreen() {
  const navigation = useNavigation();

  const [isValid, setIsValid] = useState(false);

  const next = () => {
    if (isValid) {
      navigation.navigate("SignupCharacter");
    } else {
      openModal();
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <MainTitle text="회원가입" />
        <AddressForm setIsValid={setIsValid} />
        <View style={styles.button}>
          <WideButton text="다음" onPress={next} />
        </View>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="입력한 정보를 확인해주세요."
        buttonText="닫기"
      />
    </KeyboardAvoidingView>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "$White01",
  },

  info: {
    color: "$Blue01",
    fontWeight: "bold",
    marginLeft: 15,
  },
  button: {
    bottom: 0,
    height: "50%",
    justifyContent: "flex-end",
  },
  button: {
    bottom: 0,
    height: "50%",
    flex : "1", /*이화면만 버튼 밑에 공간 있어서 추가했습니다요*/ 
    justifyContent: "flex-end",
  },
}
);

export default SignupAddressScreen;
