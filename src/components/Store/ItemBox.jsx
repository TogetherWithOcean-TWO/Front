import { View, Text, Image } from "react-native";
import EStyleSheet from "../../styles/global";

export const ItemBox = (props) => {
  switch (props.name) {
    case "nemo":
      imageSource = require("../../assets/images/storeItem/sea/nemo.png");
      break;
    case "shark":
      imageSource = require("../../assets/images/storeItem/sea/shark.png");
      break;
    case "threeFishs":
      imageSource = require("../../assets/images/storeItem/sea/threeFishs.png");
      break;
    default:
      // 기본값 설정 (필요에 따라 다른 이미지 파일명에 따른 기본값 설정 가능)
      imageSource = require("../../assets/images/storeItem/sea/nemo.png");
      break;
  }
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.box}>
        <Image source={imageSource} />
        <Text>{props.nameKr}</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  box: {
    backgroundColor: "$White01",
    width: 100,
    height: 150,
    margin: 12,
    borderRadius: 10,
  },
});
