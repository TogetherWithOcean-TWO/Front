import React from "react";
import { View } from "react-native";
import { MainContainer } from "../../components/Login/Find/Container";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";

function FindForLoginScreen() {
  return (
    <View style={styles.container}>
      <BackBar />
      <MainContainer />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "$White01",
  },
});

export default FindForLoginScreen;
