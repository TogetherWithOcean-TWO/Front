import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import EStyleSheet from "../../styles/global";
import { LabelTitle, ErrorText } from "../common/CustomText";
import { CustomInput, CustomInputWithButton } from "../common/CustomInput";
import { NarrowButton } from "../common/CustomButton";
import { useUserInfo } from "../../contexts/UserInfoContext";

export const SignupForm = ({ setIsValid }) => {
  const { userInfo, setUserInfo } = useUserInfo();

  const [nameError, setNameError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  useEffect(() => {
    validate();
  }, [
    userInfo.realName,
    userInfo.nickName,
    userInfo.email,
    userInfo.passwd,
    userInfo.checkPasswd,
    userInfo.phoneNumber,
  ]);

  const validate = () => {
    let valid = true;

    // 이름 유효성 검사
    if (
      !userInfo.realName ||
      !/^[가-힣a-zA-Z]{2,10}$/.test(userInfo.realName)
    ) {
      setNameError("숫자, 특수문자를 제외하고 2~10자로 입력해주세요");
      valid = false;
    } else {
      setNameError(" ");
    }

    // 닉네임 유효성 검사
    if (
      !userInfo.nickName ||
      !/^[\d가-힣a-zA-Z]{2,10}$/.test(userInfo.nickName)
    ) {
      setNicknameError("특수문자를 제외하고 2~10자로 입력해주세요");
      valid = false;
    } else {
      setNicknameError(" ");
    }

    // 이메일 유효성 검사
    if (!userInfo.email || !/\S+@\S+\.\S+/.test(userInfo.email)) {
      setEmailError("이메일 형식에 맞게 입력해주세요");
      valid = false;
    } else {
      setEmailError(" ");
    }

    // 비밀번호 유효성 검사
    if (
      !userInfo.passwd ||
      !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\w\s]).{10,15}$/.test(userInfo.passwd)
    ) {
      setPasswordError("영문, 숫자, 특수문자 조합 10~15자로 입력해주세요");
      valid = false;
    } else {
      setPasswordError(" ");
    }

    // 비밀번호 확인 유효성 검사
    if (userInfo.checkPasswd !== userInfo.passwd) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다");
      valid = false;
    } else {
      setConfirmPasswordError(" ");
    }

    // 전화번호 유효성 검사
    if (!userInfo.phoneNumber) {
      setPhoneNumberError("010-1234-5678 형식에 맞게 입력해주세요");
    }

    setIsValid(valid);
  };

  const formatPhoneNumber = (text) => {
    let formatted = text.replace(/\D/g, "");

    if (formatted.length > 3 && formatted.length < 8)
      formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    if (formatted.length >= 8)
      formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");

    setUserInfo({ ...userInfo, phoneNumber: formatted });

    if (!formatted || !/^010-\d{4}-\d{4}$/.test(formatted)) {
      setPhoneNumberError("010-1234-5678 형식에 맞게 입력해주세요");
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
            value={userInfo.realName}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, realName: text })
            }
          />
          {nameError ? <ErrorText text={nameError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="닉네임" />
          <View style={styles.inputWithButton}>
            <CustomInputWithButton
              style={styles.inputWithButtonInput}
              placeholder="닉네임을 입력해주세요"
              value={userInfo.nickName}
              onChangeText={(text) =>
                setUserInfo({ ...userInfo, nickName: text })
              }
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
              value={userInfo.email}
              onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
            />
            <NarrowButton text="중복확인" />
          </View>
          {emailError ? <ErrorText text={emailError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="비밀번호" />
          <CustomInput
            placeholder="비밀번호를 입력해주세요"
            value={userInfo.passwd}
            onChangeText={(text) => setUserInfo({ ...userInfo, passwd: text })}
            secure={true}
          />
          {passwordError ? <ErrorText text={passwordError} /> : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="비밀번호 확인" />
          <CustomInput
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={userInfo.checkPasswd}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, checkPasswd: text })
            }
            secure={true}
          />
          {confirmPasswordError ? (
            <ErrorText text={confirmPasswordError} />
          ) : null}
        </View>
        <View style={styles.formGroup}>
          <LabelTitle text="전화번호" />
          <CustomInput
            placeholder="전화번호를 입력해주세요"
            value={userInfo.phoneNumber}
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
