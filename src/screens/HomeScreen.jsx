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

import { useUserInfo } from "../contexts/UserInfoContext";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import axios from "axios";

const HomeScreen = () => {
  /*const [fontsLoaded] = useFonts({
    Pretendard: require("../assets/fonts/JejuGothic.ttf"),
  });*/

  //const { userInfo } = useUserInfo();
  const [userData, setUserData] = useState({nickname:"", monthlyPlog:0});
  const {token, refreshToken} = useUserInfo();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await axios.get("http://13.124.240.85:8080/member/main-info",{
          headers:{
            Authorization : token,
            RefreshToken : refreshToken,
          },
        });

        if(response.status === 200){
          const {nickname, monthlyPlog} = response.data;
          setUserData({nickname, monthlyPlog});
        }else{
          console.error("사용자 데이터를 가져오지 못했습니다.");
        }
      }catch(error){
        console.error("사용자 데이터를 가져오는 중에 오류가 발생했습니다.", error.message);
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

    fetchUserData();
  }, [token, refreshToken]);

  useEffect(() => {
    if (userData.charId === "") {
      navigation.navigate("SignupCharacter"); // 캐릭터 선택 화면으로 이동
    }
  }, [userData.charId]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF", "#A3BADE"]} // 원하는 색상 배열로 변경
        start={{ x: 0, y: 0 }} // 그라데이션 시작점 (위쪽)
        end={{ x: 0, y: 1 }} // 그라데이션 끝점 (아래쪽)
        style={styles.container}
      >
        <LogoBar />
        <ScrollView>
          <View style={styles.greetingContainer}>
            <SubTitle
              text={`안녕하세요, ${userData.realName}님!`}
              style={styles.greetingTitle}
            />
            <SubTitle text="제주 곽지 해수욕장에 가보는건 어떨까요?" />
          </View>
          <View style={styles.ploggingDoneContainer}>
            <Text style={styles.ploggingDoneText}>{`7월 ${userData.monthlyPlog}회 실천!`}</Text>
          </View>
          <CharacterSection />
          <StepSection />
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
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  greetingTitle: {
    marginTop: 10,
    marginBottom: 10, // SubTitle 컴포넌트 간의 간격 설정
  },

  ploggingDoneContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  ploggingDoneText: {
    fontSize: 18,
    fontFamily: "Pretendard",
  },
});

export default HomeScreen;
