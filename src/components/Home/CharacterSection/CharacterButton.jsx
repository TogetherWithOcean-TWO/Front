//캐릭터 사이드에 위치한 버튼
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from '../../../styles/global'; 

const CharacterButton = ({iconName, label, onPress})=>{
    const iconColor = EStyleSheet.value('$Blue01');
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={iconName} size={20} color={iconColor}/>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    button:{
        width: 55,
        height : 45,
        alignItems : 'center',
        marginVertical : 10,
        backgroundColor: '$White01',
        borderRadius: 15,
        padding: 8,
        shadowColor: '$Gray01',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        
        
    },
    label : {
        marginTop : 2,
        fontSize : 7,
        fontWeight: 'bold',
        color : '$Blue01',
    },
});

export default CharacterButton;