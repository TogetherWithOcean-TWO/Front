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
import axios from "axios";

const HomeScreen = () => {
  const [userData, setUserData] = useState({ nickname: "", monthlyPlog: 0 });
  const { userInfo } = useUserInfo();
  const { accessToken, refreshToken, charId } = userInfo; // Destructure charId from userInfo
  const navigation = useNavigation();

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      console.error("Token or refresh token is missing.");
      return;
    }

    const fetchUserData = async () => {
      try {
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
          const { nickname, monthlyPlog } = response.data;
          setUserData({ nickname, monthlyPlog });
        } else {
          console.error("사용자 데이터를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error(
          "사용자 데이터를 가져오는 중에 오류가 발생했습니다.",
          error.message
        );
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
  }, [accessToken, refreshToken]); // Depend on token and refreshToken

  useEffect(() => {
    if (charId === 0 || !charId) {
      // Include check for undefined or null charId
      navigation.navigate("SignupCharacter");
    }
  }, [charId, navigation]);

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
              text={`안녕하세요, ${userInfo.realName}님!`}
              style={styles.greetingTitle}
            />
            <SubTitle text="제주 곽지 해수욕장에 가보는건 어떨까요?" />
          </View>
          <View style={styles.ploggingDoneContainer}>
            <Text style={styles.ploggingDoneText}>
              {`7월 ${userData.monthlyPlog}회 실천!`}
            </Text>
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
