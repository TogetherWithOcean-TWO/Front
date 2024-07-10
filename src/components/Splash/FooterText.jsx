import React from "react";
import { Text, TouchableOpacity } from "react-native";
import EStyleSheet from "../../styles/global";

const FooterText = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.footerText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    bottom: -20,
    right: 10,
  },
  footerText: {
    color: "#Gray01",
    fontSize: 13,
    textDecorationLine: "underline",
    fontFamily: "Pretendard",
  },
});

export default FooterText;
