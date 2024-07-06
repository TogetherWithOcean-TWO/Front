import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StartButton from '../../components/Splash/StartButton';
import FooterText from '../../components/Splash/FooterText';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>가치해양</Text>
        <Image source={require('../../assets/images/splash.gif')} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <StartButton title="시작하기" onPress={() => navigation.navigate('LoginScreen')} />
        <FooterText text="이미 회원이에요" onPress={() => navigation.navigate('LoginScreen')} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#032661',
  },
  buttonContainer: {
    width : "100%",
    bottom : -200,
    alignItems: 'center',
    position: 'relative', // 상대적인 위치 설정
  },
  
});

export default SplashScreen;
