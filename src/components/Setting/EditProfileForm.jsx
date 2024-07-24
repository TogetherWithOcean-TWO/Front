import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MainTitle, SubTitle, LabelTitle } from "../common/CustomText";
import EStyleSheet from "../../styles/global";
import { SignupForm } from "../Signup/SignupForm";
import { WideButton } from "../common/CustomButton";

export const EditProfileForm = () => {
  const [isValid, setIsValid] = useState(false);
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
