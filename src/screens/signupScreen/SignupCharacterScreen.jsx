import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackBar } from "../../components/common/CustomBar";
import { WideButton } from "../../components/common/CustomButton";
import { CharactorForm } from "../../components/Signup/CharactorForm";
import EStyleSheet from "../../styles/global";
import { SubTitle } from "../../components/common/CustomText";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { ConfirmationModal } from "../../components/common/Modal";

function SignupAddressScreen() {
  const { userInfo, setUserInfo } = useUserInfo();

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [characterImage, setCharacterImage] = useState(null);

  const next = () => {
    if (userInfo.charId !== "") {
      navigation.navigate("SignupCharacterName", {
        characterImage,
      });
    } else {
      openModal();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.title}>
          <SubTitle text="키울 캐릭터를 선택해주세요" />
        </View>
        <CharactorForm setCharacterImage={setCharacterImage} />
        <View style={styles.button}>
          <WideButton onPress={next} text="다음" />
        </View>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="캐릭터를 선택해주세요"
        buttonText="닫기"
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "$White01",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    top: 150,
  },
  button: {
    width: "100%",
    bottom: 70,
  },
});

export default SignupAddressScreen;
