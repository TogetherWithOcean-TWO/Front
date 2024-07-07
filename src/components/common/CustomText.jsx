import React from "react";
import { Text } from "react-native";
import EStyleSheet from "../../styles/global";

// MainTitle
export const MainTitle = ({ text }) => {
  return <Text style={[styles.text, styles.mainText]}>{text}</Text>;
};

// LabelTitle
export const LabelTitle = ({ text }) => {
  return <Text style={[styles.text, styles.labelText]}>{text}</Text>;
};

// SubTitle
export const SubTitle = ({ text }) => {
  return <Text style={[styles.text, styles.subTitle]}>{text}</Text>;
};

// ErrorText
export const ErrorText = ({ text }) => {
  return <Text style={[styles.text, styles.errorText]}>{text}</Text>;
};

const styles = EStyleSheet.create({
  text: {
    color: "$Blue01",
    fontWeight: "bold",
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
});
