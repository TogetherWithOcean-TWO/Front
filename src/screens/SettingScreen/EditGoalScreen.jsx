import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";

import { EditProfileForm } from "../../components/Setting/EditProfileForm";
import { EditGoalForm } from "../../components/Setting/EditGoalForm";

export const EditGoalScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackBar navigation={navigation} />
      <EditGoalForm />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$White01",
  },
  subtitle: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "$Blue01",
  },
  statusbar: {
    backgroundColor: "$Blue02",
    flexDirection: "row",
    justifyContent: "center",
    padding: 25,
    marginVertical: 25,
    borderRadius: 10,
    width: "100%",
  },
  statusLeft: {
    alignItems: "center",
    borderRightWidth: 1,
    width: "50%",
  },
  statusRight: {
    alignItems: "center",
    borderLeftWidth: 1,
    width: "50%",
  },
});
