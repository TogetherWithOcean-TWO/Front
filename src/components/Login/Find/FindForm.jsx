import React, { useState } from "react";
import { View, Text } from "react-native";
import { WideButton, NarrowButton } from "../../common/CustomButton";
import { LabelTitle, ErrorText } from "../../common/CustomText";
import { CustomInput, CustomInputWithButton } from "../../common/CustomInput";
import EStyleSheet from "../../../styles/global";

export const FindIdForm = () => {
  const [name, setName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [certificationNumber, setCertificationNumber] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPhoneNumber = (text) => {
    let formatted = text.replace(/\D/g, "");

    if (formatted.length > 3 && formatted.length < 8)
      formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    if (formatted.length >= 8)
      formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    setPhoneNumber(formatted);

    if (!formatted || !/^010-\d{4}-\d{4}$/.test(formatted)) {
      setPhoneNumberError("010-1234-5678 형식에 맞게 입력해주세요");
    } else {
      setPhoneNumberError(" ");
    }
  };

  return (
    <View style={styles.findIdForm}>
      <View style={styles.formGroup}>
        <LabelTitle text="이름" />
        <CustomInput
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <LabelTitle text="전화번호" />
        <View style={styles.inputWithButton}>
          <CustomInputWithButton
            placeholder="전화번호를 입력해주세요"
            value={phoneNumber}
            onChangeText={(text) => formatPhoneNumber(text)}
            maxLength={13}
          />
          <NarrowButton text="인증 코드" />
        </View>
      </View>

      <View style={styles.formGroup}>
        <LabelTitle text="인증번호" />
        <CustomInput
          placeholder="인증코드 4자리 입력해주세요."
          value={certificationNumber}
          onChangeText={(text) => setCertificationNumber(text)}
        />
      </View>
      <View style={styles.button}>
        <WideButton text="확인" />
      </View>
    </View>
  );
};

export const FindPWForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");

  const nextToPage = () => {
    props.setPwNextCheck(true);
  };

  return (
    <View style={styles.findIdForm}>
      <View style={styles.formGroup}>
        <LabelTitle text="이름" />
        <CustomInput
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <LabelTitle text="이메일" />
        <View style={styles.inputWithButton}>
          <CustomInputWithButton
            placeholder="가입하신 이메일을 입력해주세요."
            value={email}
            onChangeText={(text) => setEmail(text)}
            maxLength={13}
          />
          <NarrowButton text="인증 코드" />
        </View>
      </View>

      <View style={styles.formGroup}>
        <LabelTitle text="인증번호" />
        <CustomInput
          placeholder="인증코드 4자리 입력해주세요."
          value={certificationNumber}
          onChangeText={(text) => setCertificationNumber(text)}
        />
      </View>
      <View style={styles.button}>
        <WideButton text="다음" onPress={nextToPage} />
      </View>
    </View>
  );
};

export const FindPWNextForm = () => {
  const [newPW, setNewPW] = useState("");
  const [newPWCheck, setNewPWCheck] = useState("");

  return (
    <View style={styles.findIdForm}>
      <View style={styles.formGroup}>
        <LabelTitle text="비밀번호 재설정" />
        <CustomInput
          placeholder="비밀번호를 재설정해주세요"
          value={newPW}
          onChangeText={(text) => setNewPW(text)}
        />
        <ErrorText text="영문, 숫자, 특수문자 조합 10~15자로 입력해주세요." />
      </View>
      <View style={styles.formGroup}>
        <LabelTitle text="비밀번호 확인" />
        <CustomInput
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={newPWCheck}
          onChangeText={(text) => setNewPWCheck(text)}
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
        <WideButton text="확인" />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  findIdForm: {
    padding: 25,
    paddingTop: 0,
    height: "100%",
  },
  inputForm: {
    marginBottom: 25,
  },
  formGroup: {
    marginBottom: 5,
  },
  inputWithButton: {
    flexDirection: "row",
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
