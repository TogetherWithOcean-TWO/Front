import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TopBar, Main } from '../../components/Login/Find/Bar';


function FindForLoginScreen(){

  return (
    <View style={styles.container}>
      <TopBar/>
      <Main/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff'
  },
});


export default FindForLoginScreen;
