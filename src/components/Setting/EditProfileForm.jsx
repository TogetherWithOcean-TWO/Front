import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MainTitle, SubTitle, LabelTitle } from "../common/CustomText";
import EStyleSheet from "../../styles/global";
import { SignupForm } from "../Signup/SignupForm";
import { WideButton } from "../common/CustomButton";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { getItem } from "../../utils/asyncStorage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const EditProfileForm = () => {
  const [isValid, setIsValid] = useState(false);
  const { userInfo } = useUserInfo();
  const navigation = useNavigation();

  const mypage = async() => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");
      console.log(userInfo);

      const response = await axios.patch(
        "http://13.124.240.85:8080/member/mypage",
        {
            "nickname" : userInfo.nickname, 
            "passwd" : userInfo.passwd, 
            "rePasswd" : userInfo.checkPasswd, 
            "phoneNumber" : userInfo.phoneNumber
        },
        {
          headers : {
            'Authorization': `Bearer ${accessToken}`, 
            'RefreshToken': refreshToken
            }
          }
      );
      if (response.status === 200) {
        navigation.navigate("Settings",response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <View style={styles.container}>
      <MainTitle text="개인정보 수정" />
      <SignupForm setIsValid={setIsValid} />
      <View style={styles.button}>
        <WideButton text="확인" disabled={!isValid} onPress={mypage}/>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 25,
  },
  button: {
    marginTop: 20,
  },
});
