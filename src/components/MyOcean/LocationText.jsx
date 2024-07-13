import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserLocation } from '../../contexts/UserLocationContext';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from '../../styles/global'; 
import { InfoText } from '../common/CustomText';

const LocationText = () => {
  const { selectedLocation } = useUserLocation();
  const iconColor = EStyleSheet.value('$Blue01');

  return (
    <View style={styles.container}>
      <Icon name="location-sharp" size={20} color={iconColor} style={styles.icon} />
      <InfoText text={selectedLocation} style={styles.text} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '$Blue05', // 배경색 설정
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  text: {
    marginHorizontal : 5,
  },
});

export default LocationText;
