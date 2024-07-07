import { View, Alert, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "../../styles/global";

import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";
import { SignupForm } from "../../components/Signup/SignupForm";
import { WideButton } from "../../components/common/CustomButton";
import { React, useState } from "react";

function SignupScreen() {
  const navigation = useNavigation();

  const [isValid, setIsValid] = useState(true);

  const next = () => {
    if (isValid) {
      navigation.navigate("SignupAddress");
    } else {
      Alert.alert("입력한 정보를 확인해주세요.");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <MainTitle text="회원가입" setIsValid={setIsValid} />
        <SignupForm />
        <WideButton text="다음" onPress={next} disabled={!isValid} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "$White01",
  },
});

export default SignupScreen;
