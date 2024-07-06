import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import backIcon from '../../assets/images/back.png';
import character1 from '../../assets/images/character1.png';
import character2 from '../../assets/images/character2.png';
import character3 from '../../assets/images/character3.png';
import character4 from '../../assets/images/character4.png';

import { useNavigation } from '@react-navigation/native';

function SignupAddressScreen() {
    const navigation = useNavigation();
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCharacterSelect = (index) => {
        setSelectedCharacter(index);
    }

    const next = () => {
        if (selectedCharacter !== null) {
            navigation.navigate('SignupCharacterName', {selectedCharacter});
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() =>navigation.goBack()}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.character}>
                <Text style={styles.info}>키울 캐릭터를 선택해주세요</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, selectedCharacter === 0 && styles.selectedButton]}
                        onPress={() => handleCharacterSelect(0)}>
                        <Image style={styles.image} source={character1}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, selectedCharacter === 1 && styles.selectedButton]}
                        onPress={() => handleCharacterSelect(1)}>
                        <Image style={styles.image} source={character2}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, selectedCharacter ===2 && styles.selectedButton]} 
                        onPress={()=>handleCharacterSelect(2)}>
                        <Image style={styles.image} source={character3}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, selectedCharacter ===3 && styles.selectedButton]} 
                        onPress={()=>handleCharacterSelect(3)}>
                        <Image style={styles.image} source={character4}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={[styles.submitButton, selectedCharacter === null && { backgroundColor: '#A8A8A8' }]} onPress={next} disabled={selectedCharacter === null}>
                <Text style={styles.submitButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }

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
    marginVertical : 25
  },
  buttonContainer : {
    width : '100%',
    height : '25%',
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'center',
  },
  image : {
    width : 70,
    height : 70
  },
  button : {
    padding : 25,
    margin : 10,
    backgroundColor : '#FFFFFF',
    borderRadius : '15'
  },
  selectedButton : {
    padding : 25,
    margin : 10,
    backgroundColor : '#EDF0F4',
    borderRadius : '15'
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