//캐릭터 불러오는 코드
//UI 랜더링 담당
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { LabelTitle } from '../../common/CustomText'; 

const characterImages ={
    1 : require('../../../assets/images/charactor/seal.png'),
    2: require('../../../assets/images/charactor/dolphin.png'),
    3 : require('../../../assets/images/charactor/turtle.png'),
    4 : require('../../../assets/images/charactor/fish.png'),
}

const Character = ({charId})=>{
    return(
        <View style={styles.container}>
            {charId?(
                <Image
                    source={characterImages[charId]}
                    style={styles.characterImages}
                />
            ): (
                <Text style={styles.text}>캐릭터 이미지 불러올 수 없음</Text>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignContent : 'center',
    },
    characterImages:{
        width : 120,
        height : 120,
        resizeMode: 'contain', // 이미지가 잘 맞도록 설정
    },

});

export default Character;