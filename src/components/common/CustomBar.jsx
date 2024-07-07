import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from '../../styles/global';

export const BackBar = ({ navigation }) => {
    const goBackScreen = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.bar}>
            <Icon style={styles.leftArrow} name="chevron-back-outline" size={32} onPress={goBackScreen}  />
        </View>
    );
}

export const LogoBar = () => {
    return (
        <View style={styles.bar}>
            <Icon style={styles.leftArrow} name="chevron-back-outline" size={32}  />
        </View>
    );
}

const styles = EStyleSheet.create({
    bar: {
      width: "100%",
      height: "12%",
      backgroundColor: '$White01',
      justifyContent: "flex-end",
    },
    leftArrow: {
        left:15,
        color: "$Blue01"
    },
  });