import React, { useState, useEffect, useRef } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { WideButton } from "../../components/common/CustomButton";
import { CustomInput } from "../../components/common/CustomInput";
import { SubTitle } from "../../components/common/CustomText";

function SignupSetGoalScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedCharacter, characterImage } = route.params;
  const [goal, setGoal] = useState("");
  const [isValid, setIsValid] = useState(false);
  const modalRef = useRef();

  const onlyNumbers = (text) => {
    // 숫자만 입력되도록 필터링
    const numericGoal = text.replace(/[^0-9]/g, "");
    setGoal(numericGoal);
  };

  const done = () => {
    if (isValid) {
      // modalRef.current.showModal();
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.character}>
          <SubTitle text="목표 걸음을 설정해주세요" />
          <View style={styles.buttonContainer}>
            <Image style={styles.image} source={characterImage} />
          </View>
          <View style={styles.formGroup}>
            <CustomInput
              placeholder="숫자로만 적어주세요"
              value={goal}
              onChangeText={onlyNumbers}
            />
          </View>
        </View>
        <View style={styles.button}>
          <WideButton text="완료" onPress={done} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "$White01",
    justifyContent: "center",
  },
  character: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#EDF0F4",
    padding: 15,
    borderRadius: 10,
  },
  button: {
    bottom: 20,
    justifyContent: "flex-end",
  },
});

export default SignupSetGoalScreen;
