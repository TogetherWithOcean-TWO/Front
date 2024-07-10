import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { LogoBar } from "../components/common/CustomBar"; // 올바른 경로로 수정
import { SubTitle } from "../components/common/CustomText"; // 올바른 경로로 수정
import EStyleSheet from "../styles/global";

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <LogoBar/>
        <LinearGradient
            colors={['#ff9a9e', '#fad0c4']} // 원하는 색상 배열로 변경
            start={{ x: 0, y: 0 }} // 그라데이션 시작점 (위쪽)
            end={{ x: 0, y: 1 }}   // 그라데이션 끝점 (아래쪽)
            style={styles.gradient}
        >
        </LinearGradient>
        <View style={styles.greetingContainer}>
          <SubTitle text="안녕하세요, abc님!" />
          <SubTitle text="제주 곽지 해수욕장에 가보는건 어떨까요?" />
        </View>
        {/* 다른 내용들 추가 */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF",
    },
    greetingContainer: {
      marginTop: 20,
      marginLeft: 20,
    },
    text : {
        padding : 3,
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "$White01",
    },
  });
  
  export default HomeScreen;