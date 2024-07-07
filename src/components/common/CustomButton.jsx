import React from "react";
import { TouchableOpacity, Text } from "react-native";
import EStyleSheet from "../../styles/global";

export const WideButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.wideButton]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const NarrowButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.narrowButton]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// halfButton
export const HalfButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.halfButton} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    backgroundColor: "$Blue01",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  text: {
    color: "$White01",
    fontSize: "15px",
  },

  wideButton: {
    width: "100%",
    height: 50,
  },
  narrowButton: {
    width: "20%",
    height: 45,
  },
  halfButton: {
    width: "50%",
    height: 50,
  },
});
