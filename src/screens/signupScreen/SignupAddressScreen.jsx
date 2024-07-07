import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";
import { WideButton } from "../../components/common/CustomButton";
import { AddressForm } from "../../components/Signup/AdressForm";
import EStyleSheet from "../../styles/global";

function SignupAddressScreen() {
  const navigation = useNavigation();

  const next = () => {
    navigation.navigate("SignupCharacter");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />

      <View style={styles.container}>
        <MainTitle text="회원가입" />
        <AddressForm />
        <View style={styles.button}>
          <WideButton text="다음" onPress={next} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "$White01",
  },

  info: {
    color: "$Blue01",
    fontWeight: "bold",
    marginLeft: 15,
  },
  button: {
    bottom: 0,
    height: "50%",
    justifyContent: "flex-end",
  },
});

export default SignupAddressScreen;
