import React, { useState } from "react";
import { View, Text } from "react-native";
import { WideButton } from "../../common/CustomButton";
import { LabelTitle, ErrorText } from "../../common/CustomText";
import { CustomInput } from "../../common/CustomInput";
import EStyleSheet from "../../../styles/global";
import { ConfirmationModal } from "../../common/Modal";
import { useNavigation } from "@react-navigation/native";

export const FindPWNextForm = () => {
  const navigation = useNavigation();
  const [newPW, setNewPW] = useState("");
  const [newPWCheck, setNewPWCheck] = useState("");

  // 비밀번호 설정이 완료되었습니다 모달
  const [isValidPWSetting, setIsValidPWSetting] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.findIdForm}>
      <View style={styles.formGroup}>
        <LabelTitle text="비밀번호 재설정" />
        <CustomInput
          placeholder="비밀번호를 재설정해주세요"
          value={newPW}
          onChangeText={(text) => setNewPW(text)}
          secure={true}
        />
        <ErrorText text="영문, 숫자, 특수문자 조합 10~15자로 입력해주세요." />
      </View>
      <View style={styles.formGroup}>
        <LabelTitle text="비밀번호 확인" />
        <CustomInput
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={newPWCheck}
          onChangeText={(text) => setNewPWCheck(text)}
          secure={true}
        />
        {newPW !== "" ? (
          newPW !== newPWCheck ? (
            <ErrorText text="비밀번호가 일치하지 않습니다." />
          ) : (
            <Text style={styles.correct}>비밀번호가 일치합니다.</Text>
          )
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.button}>
        <WideButton text="확인" onPress={openModal} />
      </View>
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="비밀번호 설정이 완료되었습니다."
        buttonText="확인"
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  findIdForm: {
    padding: 25,
    paddingTop: 0,
    height: "100%",
  },

  formGroup: {
    marginBottom: 8,
  },

  correct: {
    color: "$Green01",
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 12,
  },
  button: {
    bottom: 0,
    height: "90%",
    justifyContent: "flex-end",
  },
});
