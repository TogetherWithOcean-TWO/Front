import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import backIcon from '../../assets/images/back.png';
import character1 from '../../assets/images/character1.png';
import character2 from '../../assets/images/character2.png';
import character3 from '../../assets/images/character3.png';
import character4 from '../../assets/images/character4.png';

import { useNavigation } from '@react-navigation/native';

function SignupCharacterNameScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const {selectedCharacter} = route.params;
    const [character, setCharacter] = useState(character1);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validate();
      }, [name]);

    const validate = () => {
        let valid = true;
    // 이름 유효성 검사
        if (!name || name.length < 2 || name.length > 10 || /\d|[^\w\s]/.test(name)) {
            setNameError('숫자, 특수문자를 제외하고 2~10자로 입력해주세요');
            valid = false;
        } else {
            setNameError(' ');
        }
        setIsValid(valid);
    };

    const next = () => {
        if (isValid) {
          navigation.navigate('SignupSetGoal', {selectedCharacter});
        } else {
          Alert.alert('입력한 정보를 확인해주세요.');
        }
      };

      useEffect(() => {
        // 선택된 캐릭터에 따라 이미지를 설정
        switch (selectedCharacter) {
            case 0:
                setCharacter(character1);
                break;
            case 1:
                setCharacter(character2);
                break;
            case 2:
                setCharacter(character3);
                break;
            case 3:
                setCharacter(character4);
                break;
            default:
                setCharacter(character1);
        }
    }, [selectedCharacter]);
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() =>navigation.goBack()}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.character}>
                <Text style={styles.info}>캐릭터의 이름을 지어주세요</Text>
                <View style={styles.buttonContainer}>
                    <Image style={styles.image} source={character}/>
                </View>
                <TextInput style={[styles.input, nameError ? styles.inputError : null]} placeholderTextColor='#A8A8A8' placeholder="띄어쓰기 없이 적어주세요 ex)수달이"  onChangeText={text=>setName(text)}/>
                {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                </View>
            <View style={styles.footer}>
            <TouchableOpacity style={[styles.submitButton, !isValid && { backgroundColor: '#A8A8A8' }]} onPress={next} disabled={!isValid}>
            <Text style={styles.submitButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    )};

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            flex: 1,
            backgroundColor: '#fff',
            justifyContent : 'center',
        },
        navbar: {
        marginBottom: 5,
      },
      backIcon: {
        width: 20,
        height: 20,
      },
      character : {
        flex : 1,
        justifyContent : 'center'
      },
      info : {
        color : '#032661',
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : '20',
        marginVertical : 15
      },
      buttonContainer : {
        width : '100%',
        height : '40%',
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        padding : 75
      },
      image : {
        width : 70,
        height : 70
      },
      input: {
        backgroundColor : '#EDF0F4',
        padding: 15,
        borderRadius: 10,
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
      errorText : {
        color : 'red',
        marginHorizontal : 10,
        marginTop : 5,
        fontSize : 12
      },
    });

    export default SignupCharacterNameScreen;