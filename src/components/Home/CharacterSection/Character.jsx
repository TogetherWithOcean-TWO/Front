//캐릭터 불러오는 코드
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Character = ({imageSource})=>{
    return(
        <View style={styles.container}>
            <Image source={imageSource} style={styles.character}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignContent : 'center',
    },
    character:{
        width : 120,
        height : 120,
        resizeMode: 'contain', // 이미지가 잘 맞도록 설정
    },
});

export default Character;