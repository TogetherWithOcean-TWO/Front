//캐릭터 관련 데이터 페칭
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Character from './Character';
import CharacterButton from './CharacterButton';
import { useNavigation } from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import { handleCapture } from '../utils/capture';
import { LabelTitle } from '../../common/CustomText'; 

const CharacterSection = ({charId, charName}) => {
  const navigation = useNavigation();
  //캡쳐
  const viewRef = useRef();
  const [capturedUri, setCapturedUri] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.sideButtons}>
        <CharacterButton iconName="camera-outline" label="캡쳐" onPress={() => handleCapture(viewRef, setCapturedUri)} />
        <CharacterButton iconName="color-wand-outline" label="꾸미기" onPress={() => navigation.navigate("CharactorCustomScreen")} />
        <CharacterButton iconName="refresh-outline" label="캐릭터 변경" onPress={() => navigation.navigate('SignupCharacter', { fromHome: true })} />
      </View>

      <ViewShot ref={viewRef} style={styles.characterContainer}>
        <Character charId={charId} charName={charName} />
        <LabelTitle text={charName} style={styles.characterName} />
      </ViewShot>


      <View style={styles.sideButtons}>
        <CharacterButton iconName="cart-outline" label="상점" onPress={() => navigation.navigate('StoreScreen')} />
        <CharacterButton iconName="fish-outline" label="도감" onPress={() => navigation.navigate('MarinBookScreen')} />
        <CharacterButton iconName="map-outline" label="나의 해양" onPress={() => navigation.navigate('MyOcean')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상

  },
  sideButtons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  characterContainer: {
    height: '100%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 2, // 테두리 두께
    ///borderColor: 'black', // 테두리 색상
  },
  characterName: {
    position: 'absolute',
    //color : 'black',
    bottom: 10,
  },
});

export default CharacterSection;