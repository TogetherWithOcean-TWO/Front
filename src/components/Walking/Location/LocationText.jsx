import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SubTitle, InfoText } from '../../common/CustomText';
import EStyleSheet from "../../../styles/global";

const LocationText = ({ address }) => {
    return (
        <View style={styles.container}>
            <SubTitle text="장소" />
            <View style={styles.locationContainer}>
                <InfoText text={address}/>
            </View>
            <InfoText text="현재 주소가 일치하지 않는다면 수정해주세요 :)" />
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        padding: 20,
    },
    locationContainer:{
        backgroundColor: '$Blue02',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default LocationText;
