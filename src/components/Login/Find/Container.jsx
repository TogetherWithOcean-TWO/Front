import React, { useState } from "react";
import { View } from "react-native";
import { ChooseFindBar } from "./ChooseFindBar";
import { FindIdForm, FindPWForm, FindPWNextForm } from "./FindForm";
import EStyleSheet from "../../../styles/global";

export const MainContainer = () => {
  const [selectIdOrPW, setSelectIdOrPW] = useState(true); // id->true, pw->false
  const [pwNextCheck, setPwNextCheck] = useState(false);

  return (
    <View style={styles.main}>
      <ChooseFindBar
        selectIdOrPW={selectIdOrPW}
        setSelectIdOrPW={setSelectIdOrPW}
        setPwNextCheck={setPwNextCheck}
      />
      {selectIdOrPW ? (
        <FindIdForm />
      ) : pwNextCheck ? (
        <FindPWNextForm />
      ) : (
        <FindPWForm setPwNextCheck={setPwNextCheck} />
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  main: {
    width: "100%",
    height: "50%",
    backgroundColor: "$White01",
  },
});
