import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import StepsText from './StepsText';
import StepsProgressBar from './StepsProgressBar';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
import { useUserInfo } from '../../../contexts/UserInfoContext';

const StepSection = () => {
  const [stepsData, setStespData] = useState({stepGoal:0, dailyStep:0});
  const {token, refreshToken} = useUserInfo();

  //목표걸음, 오늘 걸음 수 api 연결
  useEffect(()=>{
    const fetchStepsData = async () => {
      try{
        const response = await axios.get("http://13.124.240.85:8080/member/main-info",{
          headers:{
            Authorization : token,
            RefreshToken : refreshToken,
          },
        });

        //서버 연동 성공
        if(response.status === 200){
          const {stepGoal, dailyStep} = response.data;
          setStespData({stepGoal, dailyStep});
        }else{
          console.error("사용자 데이터를 가져오지 못했습니다.");
        }
      }catch(error){
        //에러 종류별로 확인하기
        console.error("Error fetching steps data:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }  
      }
    };
    fetchStepsData();
  },[token, refreshToken]);
    return (
      <View style={styles.container}>
        <StepsText 
          stepGoal={stepsData.stepGoal}
          dailyStep={stepsData.dailyStep}
        />
        <StepsProgressBar 
          stepGoal={stepsData.stepGoal}
          dailyStep={stepsData.dailyStep}
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