import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { WideButton, NarrowButton } from "../../common/CustomButton";
import { LabelTitle, ErrorText } from "../../common/CustomText";
import { CustomInput, CustomInputWithButton } from "../../common/CustomInput";
import EStyleSheet from "../../../styles/global";
import { ConfirmationModal } from "../../common/Modal";

export const FindIdForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");

  const [email, setEmail] = useState("two@two.com");

  const formatPhoneNumber = (text) => {
    let formatted = text.replace(/\D/g, "");

    if (formatted.length > 3 && formatted.length < 8)
      formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    if (formatted.length >= 8)
      formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    setPhoneNumber(formatted);
  };

  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => {
    openSendCodeModal();
    if (isValidSendCode) {
      setIsTimerActive(true);
      setTimer(180); // Reset timer to 3 minutes
    } else {
    }
  };

  useEffect(() => {
    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsTimerActive(false);
            openTimeOutModal();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // 인증코드를 보냈습니다
  const [isValidSendCode, setIsValidSendCode] = useState(true);
  const [sendCodeModalVisible, setSendCodeModalVisible] = useState(false);

  const openSendCodeModal = () => {
    setSendCodeModalVisible(true);
  };

  const closeSendCodeModal = () => {
    setSendCodeModalVisible(false);
  };

  // 아이디는 ~~입니다 모달
  const [isValidId, setIsValidId] = useState(true);
  const [showIdModalVisible, setShowIdModalVisible] = useState(false);

  const openIdModal = () => {
    setShowIdModalVisible(true);
  };

  const closeIdModal = () => {
    setShowIdModalVisible(false);
  };

  //인증번호 일치여부 모달
  const [correctCertification, setCorrectCertification] = useState(true);
  const [certificateModalVisible, setCertificateModalVisible] = useState(false);

  const openCertificateModalVisible = () => {
    setCertificateModalVisible(true);
  };

  const closeCertificateModalVisible = () => {
    setCertificateModalVisible(false);
  };

  // 인증번호 타임아웃 모달
  const [timeOutModalVisible, setTimeOutModalVisible] = useState(false);

  const openTimeOutModal = () => {
    setTimeOutModalVisible(true);
  };

  const closeTimeOutModal = () => {
    setTimeOutModalVisible(false);
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
          <NarrowButton text="인증 코드" onPress={startTimer} />
        </View>
      </View>

      <View style={styles.formGroup}>
        <LabelTitle text="인증번호" />
        <View style={styles.inputWithButton}>
          <CustomInputWithButton
            placeholder="인증코드 4자리 입력해주세요."
            value={certificationNumber}
            onChangeText={(text) => setCertificationNumber(text)}
          />
          <View style={styles.timeText}>
            {<ErrorText text={formatTime(timer)} />}
          </View>
          <NarrowButton text="확인" onPress={openCertificateModalVisible} />
        </View>
      </View>
      <View style={styles.button}>
        <WideButton text="확인" onPress={openIdModal} />
      </View>
      <ConfirmationModal
        visible={timeOutModalVisible}
        onClose={closeTimeOutModal}
        message={"인증 유효시간이 만료되었습니다.\n 다시 진행해주세요."}
        buttonText="닫기"
      />
      <ConfirmationModal
        visible={sendCodeModalVisible}
        onClose={closeSendCodeModal}
        message={
          isValidSendCode
            ? "인증코드를 보냈습니다."
            : "인증코드를 보내는데 실패했습니다."
        }
        buttonText="닫기"
      />
      <ConfirmationModal
        visible={certificateModalVisible}
        onClose={closeCertificateModalVisible}
        message={
          correctCertification
            ? "인증되었습니다."
            : "인증번호가 일치하지 않습니다."
        }
        buttonText="확인"
      />
      <ConfirmationModal
        visible={showIdModalVisible}
        onClose={closeIdModal}
        message={
          isValidId
            ? `${name}님의 이메일은\n${email} 입니다.`
            : "가입된 유저가 아닙니다."
        }
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
  inputForm: {
    marginBottom: 25,
  },
  formGroup: {
    marginBottom: 8,
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
  timeText: {
    position: "absolute",
    right: 90,
    top: 13,
  },
});
