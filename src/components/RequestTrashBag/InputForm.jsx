//입력 필드 UI
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Modal } from 'react-native';
import EStyleSheet from '../../styles/global';
import { ErrorText, LabelTitle } from "../common/CustomText";
import { CustomInput } from "../common/CustomInput";
import Icon from "react-native-vector-icons/Foundation";
import { validateTrashBagRequest, formatPhoneNumberWithoutSet } from "../common/utils";
import Postcode from '@actbase/react-daum-postcode';
import { WebView } from 'react-native-webview';
import { BackBar } from "../../components/common/CustomBar";


const InputForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  postalCode,
  setPostalCode,
  address,
  setAddress,
  detailAddress,
  setDetailAddress,
  errors, setErrors,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    validate();
  }, [name, phoneNumber]);

  const validate = () => {
    const { valid, errors } = validateTrashBagRequest(
      { realName: name, phoneNumber },
    );
    setErrors(errors);
  };

  const handleNameChange = (value) => {
    setName(value);
  }

  const handlePhoneNumberChange = (value) => {
    const formattedPhoneNumber = formatPhoneNumberWithoutSet(value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleAddressSelect = (data) => {
    setPostalCode(data.zonecode);
    setAddress(data.address);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.form}>
      {/*이름*/}
      <View style={styles.formGroup}>
        <LabelTitle text="이름" style={styles.label} />
        <CustomInput placeholder="이름" value={name} onChangeText={handleNameChange} style={styles.inputForm} />
        {errors.nameError ? <ErrorText text={errors.nameError} /> : null}
      </View>

      {/*전화번호*/}
      <View style={styles.formGroup}>
        <LabelTitle text="전화번호" style={styles.label} />
        <CustomInput placeholder="전화번호" value={phoneNumber} onChangeText={handlePhoneNumberChange} numeric maxLength={13} />
        {errors.phoneNumberError ? <ErrorText text={errors.phoneNumberError} /> : null}
      </View>


      {/*주소*/}
      <View style={styles.formGroup}>
        <LabelTitle text="주소" style={styles.label} />
        <View style={styles.inputWithButton}>
          <CustomInput placeholder="우편번호" value={postalCode} onChangeText={setPostalCode} />
          <TouchableOpacity style={styles.searchButton} onPress={() => setIsModalVisible(true)}>
            <Icon name="magnifying-glass" size={22} color="#A8A8A8" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputForm}>
          <CustomInput placeholder="주소" value={address} onChangeText={setAddress} />
        </View>
        <View style={styles.inputForm}>
          <CustomInput placeholder="상세주소" value={detailAddress} onChangeText={setDetailAddress} />
        </View>
      </View>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <BackBar navigation={{ goBack: () => setIsModalVisible(false) }} />
          <Postcode
            style={styles.postcode}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onSelected={(data) => handleAddressSelect(data)}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>


  )
}

const styles = EStyleSheet.create({
  form: {
    flex: 1,
  },
  formGroup: {
    marginHorizontal: 25,
    marginTop: 20,
  },
  label: {
    marginBottom: 10,
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  inputWithButton: {
    position: "relative",
  },
  searchButton: {
    position: "absolute",
    right: 5,
    padding: 10,
  },
  inputForm: {
    marginTop: 15,
  },


  modalContainer: {
    flex: 1,
    //marginTop: Platform.OS === 'ios' ? 50 : 0, // ios인경우 marginTop 50
  },
  postcode: {
    flex: 1,
  },


});

export default InputForm;