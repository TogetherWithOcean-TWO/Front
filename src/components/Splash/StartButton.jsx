import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const StartButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:"80%",
    backgroundColor: '#032661',
    padding: 20,
    borderRadius: 15,
    alignItems:"center",

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight : "bold",
  },
});

export default StartButton;
