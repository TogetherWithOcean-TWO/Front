//입력 필드 UI
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import EStyleSheet from '../../styles/global';
import { LabelTitle } from "../common/CustomText";
import { CustomInput } from "../common/CustomInput";

const InputForm = ({ formData, setFormData }) => {
    const handleInputChange = (field, value) => {
      setFormData(prevState => ({ ...prevState, [field]: value }));
    };
  
    return (
      <View>
        <CustomInput
          placeholder="이름"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
        <CustomInput
          placeholder="전화번호"
          value={formData.phoneNumber}
          onChangeText={(value) => handleInputChange('phoneNumber', value)}
          numeric
        />
        <View style={styles.addressContainer}>
          <CustomInput
            placeholder="우편번호"
            value={formData.postalCode}
            onChangeText={(value) => handleInputChange('postalCode', value)}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
        <CustomInput
          placeholder="주소"
          value={formData.address}
          onChangeText={(value) => handleInputChange('address', value)}
          editable={false} // 주소 검색 결과로 자동 입력
        />
        <CustomInput
          placeholder="상세주소"
          value={formData.detailAddress}
          onChangeText={(value) => handleInputChange('detailAddress', value)}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchButton: {
      padding: 10,
      backgroundColor: '#eee',
      borderRadius: 10,
    },
    searchButtonText: {
      fontSize: 16,
    },
  });
  
  export default InputForm;