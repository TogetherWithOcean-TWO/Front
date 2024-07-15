import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
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



const RequestTrashBagScreen = ({ navigation }) => {
  const { userInfo } = useUserInfo();

  const [name, setName] = useState(userInfo.realName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [postalCode, setPostalCode] = useState(userInfo.postalCode);
  const [address, setAddress] = useState(userInfo.address);
  const [detailAddress, setDetailAddress] = useState(userInfo.detailAddress);
  const [quantity, setQuantity] = useState(1); //수량

  const handleSubmit = () => {
    //요청 처리 로직
    console.log("Request Trash : ", {
      name,
      phoneNumber,
      postalCode,
      address,
      detailAddress,
      quantity,
    });

    Alert.alert('신청 완료', '쓰레기 봉투 신청이 완료되었습니다.');

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
          />

          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        </ScrollView>

        <View style={styles.button}>
          <TouchableOpacity>
            <WideButton text="완료" onPress={handleSubmit} />
          </TouchableOpacity>
        </View>

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
    padding : 25,
    justifyContent: "flex-end",
  },
})
export default RequestTrashBagScreen;