import { Text, View } from "react-native";
import { MarinComponent } from "./MarinComponents";
import EStyleSheet from "../../styles/global";
export const MarinBook = () => {
  return (
    <View style={styles.book}>
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
      <MarinComponent />
    </View>
  );
};

const styles = EStyleSheet.create({
  book: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
