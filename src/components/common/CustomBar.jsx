import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EStyleSheet from "../../styles/global";
import logo from "../../assets/images/logo.png";
import { useUserInfo } from "../../contexts/UserInfoContext";
import PointIcon from "react-native-vector-icons/FontAwesome5";

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

export const BackBarWithPoint = ({ navigation }) => {
  const { userInfo } = useUserInfo();

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
      <View style={styles.pointView}>
        <PointIcon style={styles.pointIcon} name="coins" size={15} />
        <Text style={styles.text}>{userInfo.point}</Text>
      </View>
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
    paddingBottom: 10,
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
  pointView: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: 100,
    height: 40,
    right: 20,
    top: 60,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "$Blue01",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Pretendard",
    fontSize: 15,
    fontWeight: "bold",
    color: "$Blue01",
  },
  pointIcon: {
    left: -5,
  },
});
