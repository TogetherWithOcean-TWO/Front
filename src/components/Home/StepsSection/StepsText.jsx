import React from 'react';
import { useUserInfo } from '../../../contexts/UserInfoContext';

import { LabelTitle } from '../../common/CustomText'; 

const StepsText = () => {
    const { userInfo } = useUserInfo();
  
    return (
      <LabelTitle 
        text={`${userInfo.todaySteps} / ${userInfo.stepGoal} 걸음`} 
      />
      
    );
  };


  export default StepsText;
