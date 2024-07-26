import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MainTitle,
  SubTitle,
  LabelTitle,
} from "../../components/common/CustomText";
import EStyleSheet from "../../styles/global";
import Icon from "react-native-vector-icons/Feather";
import userIcon from "../../assets/images/userIcon.png";
import { useNavigation } from "@react-navigation/native";
import { getItem } from "../../utils/asyncStorage";
import { useUserInfo } from "../../contexts/UserInfoContext";
import axios from "axios";

export const MainContainer = (settingInfo) => {
  const navigation = useNavigation();
  const userInfo = useUserInfo();

  const goEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const goEditAddress = () => {
    navigation.navigate("EditAddress");
  };

  const goEditGoal = () => {
    navigation.navigate("EditGoal");
  };

  const logout = async() => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");

      const response = await axios.post(
        "http://13.124.240.85:8080/member/logout",
        {},
        {
          headers : {
            'Authorization': `Bearer ${accessToken}`, 
            'RefreshToken': refreshToken
            }
        }
      );
      if (response.status === 200) {
        navigation.navigate("SplashScreen");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const memberDelete = async() => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");

      const response = await axios.delete(
        "http://13.124.240.85:8080/member/delete",
        {
          headers : {
            'Authorization': `Bearer ${accessToken}`, 
            'RefreshToken': refreshToken
            }
          }
      );
      if (response.status === 200) {
        navigation.navigate("SplashScreen");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <MainTitle text="환경설정" />
        <Icon name="settings" size={25} />
      </View>
      <View style={styles.userbar}>
        <Image source={userIcon} />
        <SubTitle text={`${settingInfo.settingInfo.nickname} 님`} style={styles.name} />
      </View>
      <View style={styles.statusbar}>
        <View style={styles.statusLeft}>
          <LabelTitle text="나의 점수" />
          <SubTitle text={`${settingInfo.settingInfo.score} 점`} />
        </View>
        <View style={styles.statusRight}>
          <LabelTitle text="나의 포인트" />
          <SubTitle text={`${settingInfo.settingInfo.point} 점`} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.subtitle} onPress={goEditProfile}>
          <SubTitle text="개인정보 수정" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtitle} onPress={goEditAddress}>
          <SubTitle text="주소지 변경" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtitle} onPress={goEditGoal}>
          <SubTitle text="목표 걸음 변경" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtitle} onPress={logout}> 
          <SubTitle text="로그아웃" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtitle} onPress={memberDelete}>
          <SubTitle text="탈퇴하기" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 25,
  },
  userbar: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    margin: 15,
  },
  title: {
    flexDirection: "row",
  },
  subtitle: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "$Blue01",
  },
  statusbar: {
    backgroundColor: "$Blue02",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  statusLeft: {
    alignItems: "center",
    borderRightWidth: 1,
    width: "50%",
  },
  statusRight: {
    alignItems: "center",
    borderLeftWidth: 1,
    width: "50%",
  },
});
