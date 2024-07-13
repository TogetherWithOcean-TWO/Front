import React from "react";
import { Text } from "react-native";
import EStyleSheet from "../../styles/global";

// MainTitle
export const MainTitle = ({ text, style }) => {
  return <Text style={[styles.text, styles.mainText, style]}>{text}</Text>;
};

// LabelTitle
export const LabelTitle = ({ text ,style}) => {
  return <Text style={[styles.text, styles.labelText, style]}>{text}</Text>;
};

// SubTitle
export const SubTitle = ({ text , style}) => {
  return <Text style={[styles.text, styles.subTitle , style]}>{text}</Text>;
};

// ErrorText
export const ErrorText = ({ text }) => {
  return <Text style={[styles.text, styles.errorText]}>{text}</Text>;
};

// InfoText
export const InfoText = ({ text, style }) => {
  return <Text style={[styles.text, styles.infoText, style]}>{text}</Text>;
};

const styles = EStyleSheet.create({
  text: {
    color: "$Blue01",
    fontWeight: "bold",
    fontFamily: "Pretendard",
  },
  mainText: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
  },
  labelText: {
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 5,
  },
  errorText: {
    color: "$Red01",
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 12,
  },
  InfoText: {
    color: "$Blue01",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

});
