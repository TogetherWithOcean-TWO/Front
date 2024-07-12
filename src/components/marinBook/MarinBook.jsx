import { Text, View } from "react-native";
import { MarinComponent } from "./MarinComponents";
import EStyleSheet from "../../styles/global";
export const MarinBook = () => {
  return (
    <View style={styles.book}>
      <MarinComponent
        itemName={"vaquita"}
        itemNameKr={"바키타 돌고래"}
        mission={"회원가입 완료"}
      />
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
