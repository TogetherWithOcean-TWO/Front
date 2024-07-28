import { React, useEffect, useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { MainTitle} from "../common/CustomText";
import EStyleSheet from "../../styles/global";
import { WideButton } from "../common/CustomButton";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { CustomInput } from "../common/CustomInput";
import dolphin from "../../assets/images/charactor/dolphin.png";
import fish from "../../assets/images/charactor/fish.png";
import seal from "../../assets/images/charactor/seal.png";
import turtle from "../../assets/images/charactor/turtle.png";
import { getItem } from "../../utils/asyncStorage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../common/CustomBar";

export const EditGoalForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [characterImage, setCharacterImage] = useState(null);
  const {userInfo, setUserInfo} = useUserInfo();
  const navigation = useNavigation();

  useEffect(() => {
    // 선택된 캐릭터에 따라 이미지를 설정
    switch (userInfo.charId) {
      case 0:
        setCharacterImage(seal);
        break;
      case 1:
        setCharacterImage(dolphin);
        break;
      case 2:
        setCharacterImage(turtle);
        break;
      case 3:
        setCharacterImage(fish);
        break;
      default:
        break;
    }
  }, [userInfo.charId]);

  const onlyNumbers = (text) => {
    // 숫자만 입력되도록 필터링
    const numericGoal = text.replace(/[^0-9]/g, "");
    console.log(numericGoal);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      stepGoal: numericGoal,
    }));
  };

  const editGoal = async() => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");

      const response = await axios.patch(
        "http://13.124.240.85:8080/member/step-goal",
        {
            "stepGoal" : userInfo.stepGoal
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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <View style={styles.container}>
    <MainTitle style={styles.title} text="목표 걸음 수정" />
      <View style={styles.character}>
        <View style={styles.buttonContainer}>
          <Image style={styles.image} source={characterImage} />
        </View>
        <View style={styles.formGroup}>
          <CustomInput
            placeholder="숫자로만 적어주세요"
            value={userInfo.stepGoal}
            onChangeText={onlyNumbers}
            numeric={true}
          />
        </View>
      </View>
      <View style={styles.button}>
        <WideButton text="완료" onPress={editGoal} />
      </View>
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "$White01",
    justifyContent: "center",
  },
  title : {
    marginVertical : 25
  }, 
  character: {
    flex: 1,
    alignItems: "center",
    marginTop : 80
  },
  formGroup: {
    width: "90%",
  },

  buttonContainer: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  input: {
    backgroundColor: "$Blue02",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    bottom: 20,
    justifyContent: "flex-end",
  },
});