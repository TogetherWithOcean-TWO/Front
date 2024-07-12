import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useUserInfo } from '../../../contexts/UserInfoContext';
import EStyleSheet from 'react-native-extended-stylesheet';

const StepsProgressBar = () => {
    const { userInfo } = useUserInfo();
    const progress = Math.min(1000 / userInfo.stepGoal, 1);
  
    return (
      <View style={styles.container}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
    );
  };

  const styles = EStyleSheet.create({
    container: {
      height: 15,
      width: '60%',
      backgroundColor: '$White03',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 5,
    },
    progressBar: {
      height: '100%',
      backgroundColor: '$Red02',
    },
  });
  
  export default StepsProgressBar;