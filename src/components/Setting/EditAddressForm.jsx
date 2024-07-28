import { React, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MainTitle, SubTitle, LabelTitle } from "../common/CustomText";
import EStyleSheet from "../../styles/global";
import { SignupForm } from "../Signup/SignupForm";
import { WideButton } from "../common/CustomButton";
import { AddressForm } from "../Signup/AddressForm";
import { useNavigation } from "@react-navigation/native";
import { getItem } from "../../utils/asyncStorage";
import { useUserInfo } from "../../contexts/UserInfoContext";
import axios from "axios";

export const EditAddressForm = () => {
  const [isValid, setIsValid] = useState(false);
  const navigation = useNavigation();
  const {userInfo} = useUserInfo();

  const editAddress = async() => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");

      const response = await axios.patch(
        "http://13.124.240.85:8080/member/address",
        {
            "postalCode" : userInfo.postalCode, 
            "address" : userInfo.address, 
            "detailAddress" : userInfo.detailAddress
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
      <MainTitle text="주소지 변경" style={styles.title} />
      <AddressForm setIsValid={setIsValid} />
      <View style={styles.button}>
        <WideButton text="확인" disabled={!isValid} onPress={editAddress}/>
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
