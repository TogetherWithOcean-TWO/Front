import { View, Text, Image } from "react-native";
import EStyleSheet from "../../styles/global";

export const LogoWithText = () => {
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
  },
  image: {
    width: 100,
    height: 100,
  },
});
