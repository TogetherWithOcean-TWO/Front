import React from 'react';
import { useUserInfo } from '../../../contexts/UserInfoContext';

import { LabelTitle } from '../../common/CustomText'; 

const StepsText = ({stepGoal, dailyStep}) => {
    //const { userInfo } = useUserInfo();
  
    return (
      <LabelTitle 
        text={`${dailyStep} / ${stepGoal} 걸음`} 
      />
      
    );
  };


  export default StepsText;
