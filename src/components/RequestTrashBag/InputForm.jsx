//입력 필드 UI
import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EStyleSheet from '../../styles/global';
import { LabelTitle } from "../common/CustomText";
import { CustomInput } from "../common/CustomInput";
import Icon from "react-native-vector-icons/Foundation";
import { ScrollView } from 'react-native-gesture-handler';

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
}) => {
  return (
      <View style={styles.form}>
        {/*이름*/}
        <View style={styles.formGroup}>
          <LabelTitle text="이름" style={styles.label}/>
          <CustomInput placeholder="이름" value={name} onChangeText={setName} style={styles.inputForm}/>
        </View>

        {/*전화번호*/}
        <View style={styles.formGroup}>
          <LabelTitle text="전화번호" style={styles.label}/>
          <CustomInput placeholder="전화번호" value={phoneNumber} onChangeText={setPhoneNumber} numeric />
        </View>

        {/*주소*/}
        <View style={styles.formGroup}>
          <LabelTitle text="주소" style={styles.label} />
          <View style={styles.inputWithButton}>
            <CustomInput placeholder="우편번호" value={postalCode} onChangeText={setPostalCode} />
              <TouchableOpacity style={styles.searchButton}>
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
      </View>

      
  )
}

const styles = EStyleSheet.create({
  form: {
    flex: 1,
  },
  formGroup: {
    marginHorizontal: 25,
    marginTop : 20,
  },
  label:{
    marginBottom : 10,
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


});

export default InputForm;