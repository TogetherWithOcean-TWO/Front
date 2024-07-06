import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import backIcon from '../../assets/images/back.png';
import { useNavigation } from '@react-navigation/native';

function SignupScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validate();
  }, [name, nickname, email, password, confirmPassword, phoneNumber]);

  const validate = () => {
    let valid = true;

    // 이름 유효성 검사
    if (!name || name.length < 2 || name.length > 10 || /\d|[^\w\s]/.test(name)) {
      setNameError('숫자, 특수문자를 제외하고 2~10자로 입력해주세요');
      valid = false;
    } else {
      setNameError(' ');
    }

    // 닉네임 유효성 검사
    if (!nickname || nickname.length < 2 || nickname.length > 10 || /[^\w\s]/.test(nickname)) {
      setNicknameError('특수문자를 제외하고 2~10자로 입력해주세요');
      valid = false;
    } else {
      setNicknameError(' ');
    }

    // 이메일 유효성 검사
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('이메일 형식에 맞게 입력해주세요');
      valid = false;
    } else {
      setEmailError(' ');
    }

    // 비밀번호 유효성 검사
    if (!password || password.length < 10 || password.length > 15 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || !/[^\w\s]/.test(password)) {
      setPasswordError('영문, 숫자, 특수문자 조합 10~15자로 입력해주세요');
      valid = false;
    } else {
      setPasswordError(' ');
    }

    // 비밀번호 확인 유효성 검사
    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다');
      valid = false;
    } else {
      setConfirmPasswordError(' ');
    }   

    // 전화번호 유효성 검사
    if (!phoneNumber) {
      setPhoneNumberError('01012345678 형식에 맞게 입력해주세요');
    }

    setIsValid(valid);
  };

  const formatPhoneNumber = (text) => {
    let formatted = text.replace(/\D/g, '');

    if(formatted.length>3 && formatted.length <8)
      formatted = formatted.replace(/(\d{3})(\d{1,4})/, '$1-$2');
    if(formatted.length>=8)
      formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
    setPhoneNumber(formatted);  

    if (!formatted || !/^010-\d{4}-\d{4}$/.test(formatted)) {
      setPhoneNumberError('01012345678 형식에 맞게 입력해주세요');
    } else {
      setPhoneNumberError(' ');
    }
  };

  const next = () => {
    if (isValid) {
      navigation.navigate('SignupAddress');
    } else {
      Alert.alert('입력한 정보를 확인해주세요.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => /*뒤로가기 */[]}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>회원가입</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>이름</Text>
          <TextInput style={[styles.input, nameError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="이름을 입력해주세요" value={name} onChangeText={text=>setName(text)}/>
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>닉네임</Text>
          <View style={styles.inputWithButton}>
            <TextInput style={[styles.inputWithButtonField, nicknameError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="닉네임을 입력해주세요" value={nickname} onChangeText={text => setNickname(text)}/>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.checkButtonText}>중복확인</Text>
            </TouchableOpacity>
            </View>
            {nicknameError ? <Text style={styles.errorText}>{nicknameError}</Text> : null}
            </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>이메일</Text>
          <View style={styles.inputWithButton}>
            <TextInput style={[styles.inputWithButtonField, emailError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="이메일을 입력해주세요" value={email} onChangeText={text => setEmail(text)} />
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.checkButtonText}>중복확인</Text>
            </TouchableOpacity>
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>비밀번호</Text>
          <TextInput style={[styles.input, passwordError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="비밀번호를 입력해주세요" secureTextEntry value={password} onChangeText={text=>setPassword(text)}/>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>비밀번호 확인</Text>
          <TextInput style={[styles.input, confirmPasswordError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="비밀번호를 한번 더 입력해주세요" secureTextEntry value={confirmPassword} onChangeText={text=>setConfirmPassword(text)}/>
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput style={[styles.input, phoneNumberError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="전화번호를 입력해주세요" value={phoneNumber} onChangeText={text=>formatPhoneNumber(text)} maxLength={13}/>
          {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
        </View>
      </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.submitButton, !isValid && { backgroundColor: '#A8A8A8' }]} onPress={next} disabled={!isValid}>
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
    flex : 1,
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
    marginBottom : 5
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
  },
  inputWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWithButtonField: {
    flex: 1,
    backgroundColor: '#EDF0F4',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  checkButton: {
    backgroundColor: '#032661',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  checkButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  errorText : {
    color : 'red',
    marginHorizontal : 10,
    marginTop : 5,
    fontSize : 12
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

export default SignupScreen;