import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MainTitle, SubTitle, LabelTitle } from "../common/CustomText";
import EStyleSheet from "../../styles/global";
import { SignupForm } from "../Signup/SignupForm";
import { WideButton } from "../common/CustomButton";
import { AddressForm } from "../Signup/AddressForm";
import { useNavigation } from "@react-navigation/native";
export const EditAddressForm = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <View style={styles.container}>
      <MainTitle text="주소지 변경" style={styles.title} />
      <AddressForm setIsValid={setIsValid} />
      <View style={styles.button}>
        <WideButton text="확인" disabled={!isValid} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
  button: {
    bottom: -330,
    // marginTop: 20,
  },
});
