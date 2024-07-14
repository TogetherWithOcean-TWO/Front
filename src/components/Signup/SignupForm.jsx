import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView } from "react-native";
import EStyleSheet from "../../styles/global";
import { LabelTitle, ErrorText } from "../common/CustomText";
import { CustomInput, CustomInputWithButton } from "../common/CustomInput";
import { NarrowButton } from "../common/CustomButton";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { ConfirmationModal } from "../common/Modal";
import axios from "axios";
import { validateUserInfo, formatPhoneNumber } from "./utils";

export const SignupForm = ({ setIsValid }) => {
  const { userInfo, setUserInfo } = useUserInfo();

  const [modalVisible, setModalVisible] = useState(false);
  const [nameError, setNameError] = useState("");
  const [nicknameError, setNicknameError] = useState(
    "특수문자를 제외하고 2~10자로 입력해주세요"
  );
  const [emailError, setEmailError] =
    useState("이메일 형식에 맞게 입력해주세요");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [checkNickName, setCheckNickName] = useState(false);
  const [nickNameModalVisible, setNickNameModalVisible] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const openNickNameModal = () => setNickNameModalVisible(true);
  const closeNickNameModal = () => setNickNameModalVisible(false);

  const openEmailModal = () => setEmailModalVisible(true);
  const closeEmailModal = () => setEmailModalVisible(false);

  const handleCheckNickName = useCallback(() => {
    if (nicknameError === "특수문자를 제외하고 2~10자로 입력해주세요") {
      openModal();
      return;
    }
    axios
      .get(
        `http://13.124.240.85:8080/member/check-nick?nickname=${userInfo.nickName}`
      )
      .then((res) => {
        if (res.data === "사용가능한 닉네임입니다.") {
          setCheckNickName(true);
        } else {
          setCheckNickName(false);
        }
      })
      .catch((error) => {});
    openNickNameModal();
  }, [userInfo.nickName, nicknameError]);

  const handleCheckEmail = useCallback(() => {
    if (emailError === "이메일 형식에 맞게 입력해주세요") {
      openModal();
      return;
    }
    axios
      .get(
        `http://13.124.240.85:8080/member/check-email?email=${userInfo.email}`
      )
      .then((res) => {
        if (res.data === "사용가능한 이메일입니다.") {
          setCheckEmail(true);
        } else {
          setCheckEmail(false);
        }
      })
      .catch((error) => {});
    openEmailModal();
  }, [userInfo.email, emailError]);

  useEffect(() => {
    validate();
  }, [
    userInfo.realName,
    userInfo.nickName,
    userInfo.email,
    userInfo.passwd,
    userInfo.checkPasswd,
    userInfo.phoneNumber,
    checkNickName,
    checkEmail,
  ]);

  const validate = () => {
    const { valid, errors } = validateUserInfo(
      userInfo,
      checkNickName,
      checkEmail
    );
    setNameError(errors.nameError);
    setNicknameError(errors.nicknameError);
    setEmailError(errors.emailError);
    setPasswordError(errors.passwordError);
    setConfirmPasswordError(errors.confirmPasswordError);
    setPhoneNumberError(errors.phoneNumberError);
    setIsValid(valid);
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
            <NarrowButton text="중복확인" onPress={handleCheckNickName} />
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
            <NarrowButton text="중복확인" onPress={handleCheckEmail} />
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
            onChangeText={(text) =>
              formatPhoneNumber(
                text,
                setUserInfo,
                userInfo,
                setPhoneNumberError
              )
            }
            numeric={true}
            maxLength={13}
          />
          {phoneNumberError ? <ErrorText text={phoneNumberError} /> : null}
        </View>
      </View>
      <ConfirmationModal
        visible={nickNameModalVisible}
        onClose={closeNickNameModal}
        message={
          checkNickName
            ? "사용할 수 있는 닉네임 입니다."
            : "이미 사용중인 닉네임입니다."
        }
        buttonText="닫기"
      />
      <ConfirmationModal
        visible={emailModalVisible}
        onClose={closeEmailModal}
        message={
          checkEmail
            ? "사용할 수 있는 이메일 입니다."
            : "이미 사용중인 이메일입니다.\n 로그인으로 이동해주세요"
        }
        buttonText="닫기"
      />
      <ConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        message="입력한 정보를 확인해주세요."
        buttonText="닫기"
      />
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
