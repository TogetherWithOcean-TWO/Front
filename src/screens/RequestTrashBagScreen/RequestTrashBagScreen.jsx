import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from "react-native";
import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";
import { WideButton } from "../../components/common/CustomButton";
import { ConfirmationModal } from "../../components/common/Modal";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";

import InputForm from "../../components/RequestTrashBag/InputForm";
import HomeScreen from "../HomeScreen";
import { useNavigation } from "@react-navigation/native";
//import QuantitySelector from "../../components/RequestTrashBag/QuantitySelector";


const TrashBagRequestScreen = ({ navigation }) => {
    const { userInfo, setUserInfo } = useUserInfo();

    const [formData, setFormData] = useState({
        name: userInfo.realName,
        phoneNumber: userInfo.phoneNumber,
        postalCode: userInfo.postalCode,
        address: userInfo.address,
        detailAddress: userInfo.detailAddress,
      });
      const [quantity, setQuantity] = useState(1);
    
      const handleSubmit = () => {
        Alert.alert('신청 완료', '쓰레기 봉투 신청이 완료되었습니다.');
      };

      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>쓰레기 봉투 신청</Text>
            <InputForm formData={formData} setFormData={setFormData} />
            <Text style={styles.label}>수량</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Text style={styles.infoText}>최대 쓰레기 봉투 등록 가능 개수는 {quantity}개 입니다.</Text>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>신청</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
        },
        scrollView: {
          flexGrow: 1,
          justifyContent: 'center',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        label: {
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
        },
        infoText: {
          fontSize: 14,
          color: '#666',
          marginTop: 10,
        },
        submitButton: {
          marginTop: 20,
          padding: 15,
          backgroundColor: '#005BAC',
          borderRadius: 10,
          alignItems: 'center',
        },
        submitButtonText: {
          fontSize: 18,
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      
      export default RequestTrashBagScreen;