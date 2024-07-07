import React from "react";
import { View } from "react-native";
import { MainContainer } from "../../components/Login/Find/Container";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

function FindForLoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackBar navigation={navigation} />
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
