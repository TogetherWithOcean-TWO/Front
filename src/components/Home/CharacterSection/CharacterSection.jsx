//Character이랑 CharacterButton 컴포넌트 합침
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Character from './Character';
import CharacterButton from './CharacterButton';

const CharacterSection =()=>{
    const characterImageUri = 'https://example.com/character.png';  //캐릭터 uri png

    return (
    <View style={styles.container}>
      <View style={styles.sideButtons}>
        <CharacterButton iconName="camera-outline" label="캡쳐" onPress={() => {}} />
        <CharacterButton iconName="brush-outline" label="꾸미기" onPress={() => {}} />
        <CharacterButton iconName="refresh-outline" label="캐릭터 변경" onPress={() => {}} />
      </View>
      <View style={styles.characterContainer}>
        <Character imageUri={characterImageUri} />
      </View>
      <View style={styles.sideButtons}>
        <CharacterButton iconName="cart-outline" label="상점" onPress={() => {}} />
        <CharacterButton iconName="bus-outline" label="도감" onPress={() => {}} />
        <CharacterButton iconName="book-outline" label="나의 해양" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        marginVertical : 20,
    },
    sideButtons: {
        flex : 1,
        justifyContent : 'space-around',
        alignItems : 'center',
    },
    characterContainer: {
        flex : 2,
        alignItems : 'center',
    },
});

export default CharacterSection;