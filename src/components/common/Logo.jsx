import { View, Text, Image } from "react-native";
import EStyleSheet from "../../styles/global";
import { useFonts } from "expo-font";

export const LogoWithText = () => {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/JejuGothic.ttf"),
  });

  return (
    <View>
      <Text style={styles.title}>가치해양</Text>
      <Image
        source={require("../../assets/images/splash.gif")}
        style={styles.image}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "$Blue01",
    textAlign: "center",
    fontFamily: "Pretendard",
  },
  image: {
    width: 100,
    height: 100,
  },
});
