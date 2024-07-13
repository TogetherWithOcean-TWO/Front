import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Character from './Character';
import CharacterButton from './CharacterButton';
import { useUserInfo } from '../../../contexts/UserInfoContext';
import { useNavigation } from '@react-navigation/native';


import seal from '../../../assets/images/charactor/seal.png';
import dolphin from '../../../assets/images/charactor/dolphin.png';
import turtle from '../../../assets/images/charactor/turtle.png';
import fish from '../../../assets/images/charactor/fish.png';

import { LabelTitle } from '../../common/CustomText'; 

const CharacterSection = () => {
  const { userInfo } = useUserInfo();
  const navigation = useNavigation();

  const getCharacterImage = (charId) => {
    switch (charId) {
      case 0:
        return seal;
      case 1:
        return dolphin;
      case 2:
        return turtle;
      case 3:
        return fish;
      default:
        return null;
    }
  };

  const characterImage = getCharacterImage(userInfo.charId);

  if (characterImage === null) {
    return null; // 캐릭터 이미지가 설정되지 않은 경우 렌더링하지 않음
  }

  return (
    <View style={styles.container}>
      <View style={styles.sideButtons}>
        <CharacterButton iconName="camera-outline" label="캡쳐" onPress={() => {}} />
        <CharacterButton iconName="color-wand-outline" label="꾸미기" onPress={() => navigation.navigate("CharactorCustomScreen")} />
        <CharacterButton iconName="refresh-outline" label="캐릭터 변경" onPress={() => navigation.navigate('SignupCharacter', {fromHome : true})} />
      </View>
      <View style={styles.characterContainer}>
        <Character imageSource={characterImage} />
        <LabelTitle text={userInfo.charName} style={styles.characterName}/>
      </View>
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
    width : '100%',
    height : '40%',
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
    height : '100%',
    flex: 3,
    justifyContent : 'center',
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