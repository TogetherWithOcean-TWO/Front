import React, { useState } from "react";
import { View } from "react-native";
import EStyleSheet from "../../styles/global";
import { MainTitle } from "../../components/common/CustomText";
import { BackBarWithPoint } from "../../components/common/CustomBar";
import StoreIcon from "react-native-vector-icons/FontAwesome5";

import { StoreBar } from "../../components/Store/StoreBar";
import { StoreForm } from "../../components/Store/StoreForm";

function StoreScreen({ navigation }) {
  const [category, setCategory] = useState("sea");

  return (
    <View style={styles.container}>
      <BackBarWithPoint navigation={navigation} />
      <View style={styles.titleView}>
        <MainTitle text="상점" />
        <StoreIcon style={styles.icon} name="store" size={20} />
      </View>
      <View style={styles.storeMain}>
        <StoreBar setCategory={setCategory} category={category} />
        <StoreForm category={category} />
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$White01",
  },
  titleView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "$White01",
    padding: 30,
  },
  icon: {
    paddingLeft: 5,
    paddingTop: 1,
    color: "$Blue01",
  },
  storeMain: {
    backgroundColor: "$White01",
    justifyContent: "center",
  },
});

export default StoreScreen;
