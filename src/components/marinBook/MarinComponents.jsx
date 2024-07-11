import { Text, View } from "react-native";
import EStyleSheet from "../../styles/global";
export const MarinComponent = () => {
  return (
    <View style={styles.box}>
      <Text>돌고랭</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  box: {
    width: 95,
    height: 140,
    backgroundColor: "$White03",
    margin: 10,
    borderRadius: 10,
  },
});
