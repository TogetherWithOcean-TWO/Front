import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LogoBar } from "../components/common/CustomBar";
import { SubTitle } from "../components/common/CustomText";
import BottomNavigationBar from "../components/Home/BottomNavigationBar";
import RecommendationSection from "../components/Home/RecommendationSection";
import CharacterSection from "../components/Home/CharacterSection/CharacterSection";
import StepSection from "../components/Home/StepsSection/StepsSection";
import EStyleSheet from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getItem } from "../utils/asyncStorage";

const HomeScreen = () => {
  const [userData, setUserData] = useState({ 
    nickname: "", 
    monthlyPlog: -1,
    //characterSection
    charId:null,
    charName:"",
    //stepSection
    dailyStep:0,
    stepGoal:0,
   });
  const navigation = useNavigation();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const accessToken = await getItem("accessToken");
        const refreshToken = await getItem("refreshToken");

        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);

        if(!accessToken || !refreshToken){
          console.error("액세스 토근 또는 리프레시 토큰이 누락되었습니다.");
          return;
        }

        const response = await axios.get(
          "http://13.124.240.85:8080/member/main-info",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Bearer token으로 설정
              RefreshToken: refreshToken, // 헤더에 리프레시 토큰 추가
            },
          }
        );

        if (response.status === 200) {
          const { nickname, monthlyPlog, charId, charName, dailyStep, stepGoal } = response.data;
          console.log("User Data:", response.data);
          setUserData({ nickname, monthlyPlog, charId, charName, dailyStep, stepGoal });
        } else {
          console.error("HomeScreen : 사용자 데이터를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error("HomeScreen Error:", error);
      }
    };

    fetchUserData();
  }, []); // 컴포넌트가 처음 마운트 될 때만 api 실행

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF", "#A3BADE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <LogoBar />
        <ScrollView>
          <View style={styles.greetingContainer}>
            <SubTitle
              text={`안녕하세요, ${userData.nickname}님!`}
              style={styles.greetingTitle}
            />
            <SubTitle text="제주 곽지 해수욕장에 가보는건 어떨까요?" />
          </View>
          <View style={styles.ploggingDoneContainer}>
            <Text style={styles.ploggingDoneText}>
              {`7월 ${userData.monthlyPlog}회 실천!`}
            </Text>
          </View>
          <CharacterSection charId={userData.charId} charName={userData.charName}/>
          <StepSection dailyStep={userData.dailyStep} stepGoal={userData.stepGoal}/>
          <RecommendationSection />
        </ScrollView>
      </LinearGradient>
      <BottomNavigationBar navigation={navigation} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  greetingContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  greetingTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  ploggingDoneContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  ploggingDoneText: {
    fontSize: 18,
    fontFamily: "Pretendard",
  },
});

export default HomeScreen;
