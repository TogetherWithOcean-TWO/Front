import React from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EStyleSheet from "../../styles/global";
import logo from "../../assets/images/logo.png";

export const BackBar = ({ navigation }) => {
  const goBackScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.bar}>
      <Icon
        style={styles.leftArrow}
        name="chevron-back-outline"
        size={32}
        onPress={goBackScreen}
      />
    </View>
  );
};

//
export const LogoBar = () => {
  return (
    <View style={styles.bar}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = EStyleSheet.create({
  bar: {
    width: "100%",
    height: "12%",
    backgroundColor: "$White01",
    justifyContent: "flex-end",
    paddingBottom : 10
  },
  leftArrow: {
    left: 15,
    color: "$Blue01",
  },
  logo: {
    width: 40,
    height: 40,
    left: 30,
  },
});
