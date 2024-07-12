import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { LogoBar } from "../components/common/CustomBar"; 
import { SubTitle } from "../components/common/CustomText"; 
import BottomNavigationBar from "../components/Home/BottomNavigationBar"; 
import RecommendationSection from "../components/Home/RecommendationSection";
import CharacterSection from "../components/Home/CharacterSection/CharacterSection";
import EStyleSheet from "../styles/global";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#FFFFFF','#EFEFEF','#A3BADE']} // 원하는 색상 배열로 변경
        start={{ x: 0, y: 0 }} // 그라데이션 시작점 (위쪽)
        end={{ x: 0, y: 1 }}   // 그라데이션 끝점 (아래쪽)
        style={styles.container}
      >
        <LogoBar />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.greetingContainer}>
            <SubTitle text="안녕하세요, abc님!" />
            <SubTitle text="제주 곽지 해수욕장에 가보는건 어떨까요?" />
          </View>
          <View style={styles.ploggingDoneContainer}>
            <Text style={styles.ploggingDoneText}>7월 3회 실천!</Text>
          </View>
          <CharacterSection />
          <RecommendationSection/>
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
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80, // BottomNavigationBar 공간 확보
  },
  greetingContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  ploggingDoneContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical :30,
  },
  ploggingDoneText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
