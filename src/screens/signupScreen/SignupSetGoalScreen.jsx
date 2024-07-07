import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import backIcon from '../../assets/images/back.png';
import character1 from '../../assets/images/character1.png';
import character2 from '../../assets/images/character2.png';
import character3 from '../../assets/images/character3.png';
import character4 from '../../assets/images/character4.png';

import { useNavigation } from '@react-navigation/native';
import { BackBar } from '../../components/common/CustomBar';


function SignupSetGoalScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const {selectedCharacter} = route.params;
    const [character, setCharacter] = useState(character1);
    const [goal, setGoal] = useState('');
    const [isValid, setIsValid] = useState(false);
    const modalRef = useRef();

    const onlyNumbers = (text) => {
        // 숫자만 입력되도록 필터링
        const numericGoal = text.replace(/[^0-9]/g, '');
        setGoal(numericGoal);
    };

    useEffect(() => {
        validate();
      }, [goal]);

    const validate = () => {
        let valid = true;
    // 이름 유효성 검사
        if (!goal) {
            valid = false;
        } else {
        }
        setIsValid(valid);
    };

    const done = () => {
        if (isValid) {
            // modalRef.current.showModal();
      }};

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
          <BackBar navigation={navigation}/>
        <View style={styles.container}>
            
            <View style={styles.character}>
                <Text style={styles.info}>목표 걸음을 설정해주세요</Text>
                <View style={styles.buttonContainer}>
                    <Image style={styles.image} source={character}/>
                </View>
                <TextInput style={styles.input} maxLength = {5} value={goal} placeholderTextColor='#A8A8A8' placeholder="숫자로만 적어주세요 ex)5000"  onChangeText={onlyNumbers}/>
                </View>
            <View style={styles.footer}>
            <TouchableOpacity style={[styles.submitButton, !isValid && { backgroundColor: '#A8A8A8' }]} onPress={done} disabled={!isValid}>
            <Text style={styles.submitButtonText}>완료</Text>
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

    export default SignupSetGoalScreen;