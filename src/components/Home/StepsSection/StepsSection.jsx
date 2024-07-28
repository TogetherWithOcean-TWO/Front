import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import StepsText from './StepsText';
import StepsProgressBar from './StepsProgressBar';
import EStyleSheet from 'react-native-extended-stylesheet';


const StepSection = ({dailyStep, stepGoal}) => {

    return (
      <View style={styles.container}>
        <StepsText 
          stepGoal={stepGoal}
          dailyStep={dailyStep}
        />
        <StepsProgressBar 
          stepGoal={stepGoal}
          dailyStep={dailyStep}
        />
      </View>
    );
  };

  const styles = EStyleSheet.create({
    container: {
      alignItems: 'center',
      //borderWidth: 2, // 테두리 두께
      //borderColor: 'black', // 테두리 색상
      
    },
  });
  
  export default StepSection;