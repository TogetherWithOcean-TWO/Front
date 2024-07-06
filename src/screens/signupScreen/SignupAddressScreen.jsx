import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,KeyboardAvoidingView } from 'react-native';
import backIcon from '../../assets/images/back.png';
import searchIcon from '../../assets/images/search.png';
import { useNavigation } from '@react-navigation/native';

function SignupAddressScreen() {
    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
        <Text style={styles.title}>회원가입</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>주소</Text>
          <View style={styles.inputWithButton}>
            <TextInput style={styles.input} placeholderTextColor='#A8A8A8' placeholder="우편번호" />
            <TouchableOpacity style={styles.searchButton} onPress={() => { /* 검색 */ }}>
                <Image source={searchIcon} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input} placeholderTextColor='#A8A8A8' placeholder="기본 주소"  />
          <TextInput style={styles.input} placeholderTextColor='#A8A8A8' placeholder="상세 주소를 입력해주세요"  />
        </View>        
        <Text style={styles.info}>쓰레기 봉투를 배급 받으실 주소를 입력해주세요 :)</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SignupCharacter')}>
          <Text style={styles.submitButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    marginBottom: 5,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal : 10
  },
  form: {
    flex: 1,
  },
  formGroup: {
    marginHorizontal: 10,
    marginVertical : 5
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft : 5,
    color : '#032661',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor : '#EDF0F4',
    padding: 15,
    borderRadius: 10,
    marginBottom : 20
  },
  inputWithButton : {
    position : 'relative',
  },
  searchButton : {
    position : 'absolute',
    right : 10,
    padding : 10
  },
  info : {
    color : '#032661',
    fontWeight : 'bold',
    marginLeft : 15
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#032661',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupAddressScreen;