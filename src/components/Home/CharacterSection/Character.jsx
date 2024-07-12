//캐릭터 불러오는 코드
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Character = ({imageUri})=>{
    return(
        <View style={styles.container}>
            <Image source={{uri : imageUri}} style={styles.character}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignContent : 'center',
    },
    character:{
        width : 100,
        height : 100,
    },
});

export default Character;