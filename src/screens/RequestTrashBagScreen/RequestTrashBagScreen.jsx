import React, { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";
import { WideButton } from "../../components/common/CustomButton";
import { ConfirmationModal } from "../../components/common/Modal";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";

import InputForm from "../../components/RequestTrashBag/InputForm";
import QuantitySelector from "../../components/RequestTrashBag/QuantitySelector";
import HomeScreen from "../HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { validateTrashBagRequest } from "../../components/common/utils";


const RequestTrashBagScreen = ({ navigation }) => {
  const { userInfo } = useUserInfo();

  const [name, setName] = useState(userInfo.realName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [postalCode, setPostalCode] = useState(userInfo.postalCode);
  const [address, setAddress] = useState(userInfo.address);
  const [detailAddress, setDetailAddress] = useState(userInfo.detailAddress);
  const [quantity, setQuantity] = useState(1); //수량

  const [errors, setErrors] = useState({
    nameError: "",
    phoneNumberError: "",
  });

  //커스텀 모달창 이용
  //정보 형식 오류 : (모달창)유효한 정보를 입력해주세요
  //주소 비어 있음 : 유효한 주소를 입력해주세요.
  //정보 형식 정상 : (모달창)신청이 완료되었습니다. -> 홈 화면 이동

  // 모달 가시성 및 메시지 상태 관리
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = () => {

    //최신 오류 상태 확인을 위해 validate 함수 실행
    const { valid, errors: validationErrors } = validateTrashBagRequest({
      realName: name,
      phoneNumber,
    });
    setErrors(validationErrors);

    console.log("Submitting with values:", { realName: name, phoneNumber });
    console.log("Validation result:", valid, validationErrors);

    //이름 전화번호가 형식에 맞지 않을 때
    if (!valid) {
      setModalMessage("유효한 정보를 입력해주세요.");
      setModalVisible(true);
      return;
    }

    //주소 창 비어 있으면
    if (!postalCode || !address || !detailAddress) {
      setModalMessage("정확한 주소를 입력해주세요.");
      setModalVisible(true);
      return;
    }

    //요청 처리 로직
    console.log("Request Trash : ", {
      name,
      phoneNumber,
      postalCode,
      address,
      detailAddress,
      quantity,
    });

    //정상적인 처리
    setModalMessage('봉투 신청이 완료되었습니다.');
    setModalVisible(true);

  };

  const closeModal = () => {
    setModalVisible(false);
    if (modalMessage === '봉투 신청이 완료되었습니다.') {
      navigation.navigate("HomeScreen");  // 신청 완료 후 홈 화면으로 이동
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">

      <View style={styles.container}>
        <BackBar navigation={navigation} />
        <MainTitle text="쓰레기 봉투 신청" style={styles.title} />

        <ScrollView>
          <InputForm
            name={name} setName={setName}
            phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
            postalCode={postalCode} setPostalCode={setPostalCode}
            address={address} setAddress={setAddress}
            detailAddress={detailAddress} setDetailAddress={setDetailAddress}
            errors={errors} setErrors={setErrors}
          />

          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        </ScrollView>

        <View style={styles.button}>
          <TouchableOpacity>
            <WideButton text="완료" onPress={handleSubmit} />
          </TouchableOpacity>
        </View>

        {/*모달 */}
        <ConfirmationModal
          visible={modalVisible}
          onClose={closeModal}
          message={modalMessage}
          buttonText="닫기"
        />

      </View>

    </KeyboardAvoidingView>

  )

}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$White01"
  },
  title: {
    padding: 20,
  },
  button: {
    bottom: 20,
    padding: 25,
    justifyContent: "flex-end",
  },
})
export default RequestTrashBagScreen;