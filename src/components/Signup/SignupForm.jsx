import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "../../styles/global";
import { LabelTitle, ErrorText } from "../common/CustomText";
import { CustomInput, CustomInputWithButton } from "../common/CustomInput";
import { NarrowButton } from "../common/CustomButton";

export const SignupForm = (props) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validate();
  }, [name, nickname, email, password, confirmPassword, phoneNumber]);

  const validate = () => {
    let valid = true;

    // 이름 유효성 검사
    if (
      !name ||
      name.length < 2 ||
      name.length > 10 ||
      /\d|[^\w\s]/.test(name)
    ) {
      setNameError("숫자, 특수문자를 제외하고 2~10자로 입력해주세요");
      valid = false;
    } else {
      setNameError(" ");
    }

    // 닉네임 유효성 검사
    if (
      !nickname ||
      nickname.length < 2 ||
      nickname.length > 10 ||
      /[^\w\s]/.test(nickname)
    ) {
      setNicknameError("특수문자를 제외하고 2~10자로 입력해주세요");
      valid = false;
    } else {
      setNicknameError(" ");
    }

    // 이메일 유효성 검사
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("이메일 형식에 맞게 입력해주세요");
      valid = false;
    } else {
      setEmailError(" ");
    }

    // 비밀번호 유효성 검사
    if (
      !password ||
      password.length < 10 ||
      password.length > 15 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      !/[^\w\s]/.test(password)
    ) {
      setPasswordError("영문, 숫자, 특수문자 조합 10~15자로 입력해주세요");
      valid = false;
    } else {
      setPasswordError(" ");
    }

    // 비밀번호 확인 유효성 검사
    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다");
      valid = false;
    } else {
      setConfirmPasswordError(" ");
    }

    // 전화번호 유효성 검사
    if (!phoneNumber) {
      setPhoneNumberError("01012345678 형식에 맞게 입력해주세요");
    }

    setIsValid(valid);
  };

  const formatPhoneNumber = (text) => {
    let formatted = text.replace(/\D/g, "");

    if (formatted.length > 3 && formatted.length < 8)
      formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    if (formatted.length >= 8)
      formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    setPhoneNumber(formatted);

    if (!formatted || !/^010-\d{4}-\d{4}$/.test(formatted)) {
      setPhoneNumberError("01012345678 형식에 맞게 입력해주세요");
    } else {
      setPhoneNumberError(" ");
    }
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <LabelTitle text="이름" />
          <CustomInput
            placeholder="이름을 입력해주세요"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          {nameError ? <ErrorText text={nameError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="닉네임" />
          <View style={styles.inputWithButton}>
            <CustomInputWithButton
              style={styles.inputWithButtonInput}
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChangeText={(text) => setNickname(text)}
            />
            <NarrowButton text="중복확인" />
          </View>
          {nicknameError ? <ErrorText text={nicknameError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="이메일" />
          <View style={styles.inputWithButton}>
            <CustomInputWithButton
              style={styles.inputWithButtonInput}
              placeholder="이메일을 입력해주세요"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <NarrowButton text="중복확인" />
          </View>

          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="비밀번호" />
          <CustomInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {passwordError ? <ErrorText text={passwordError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="비밀번호 확인" />
          <CustomInput
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {confirmPasswordError ? (
            <ErrorText text={confirmPasswordError} />
          ) : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="전화번호" />
          <CustomInput
            placeholder="전화번호를 입력해주세요"
            value={phoneNumber}
            onChangeText={(text) => formatPhoneNumber(text)}
            maxLength={13}
          />
          {phoneNumberError ? <ErrorText text={phoneNumberError} /> : null}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  form: {
    flex: 1,
    marginVertical: 10,
  },
  formGroup: {
    marginBottom: 5,
  },
  inputWithButton: {
    flexDirection: "row",
  },
});
