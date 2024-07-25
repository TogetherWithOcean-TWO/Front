import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useUserInfo } from '../../../contexts/UserInfoContext';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ProgressBar } from "react-native-paper";

const StepsProgressBar = ({stepGoal, dailyStep}) => {
    const iconColor = EStyleSheet.value('$Red02');
    const progress = stepGoal > 0 ? dailyStep / stepGoal : 0;

    return(
      <View style={styles.container}>
        <ProgressBar progress={progress} style={styles.progressBar} color={iconColor} />
      </View>
    );
  };

  const styles = EStyleSheet.create({
    container: {
      height: 15,
      width: '60%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 5,
    },
    progressBar: {
      height: '100%',
      backgroundColor: '$White03',
    },
  });
  
  export default StepsProgressBar;