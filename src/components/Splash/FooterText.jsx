import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const FooterText = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.footerText}>{text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container:{
    position : 'absolute',
    bottom : -20,
    right : 50,
  },
  footerText: {
    color: '#A8A8A8',
    fontSize : 10,
    textDecorationLine : 'underline',
  },
});

export default FooterText;
