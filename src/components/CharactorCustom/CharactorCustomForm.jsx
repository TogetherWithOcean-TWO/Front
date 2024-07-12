import { View, TouchableOpacity, Image } from "react-native";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";

export const CharactorCustomForm = ({ setCharacterImage }) => {
  const { userInfo, setUserInfo } = useUserInfo();

  const getImageSource = () => {
    console.log(userInfo.charId);
    switch (userInfo.charId) {
      case 0:
        return require("../../assets/images/charactor/dolphin.png");
      case 1:
        return require("../../assets/images/charactor/fish.png");
      case 2:
        return require("../../assets/images/charactor/seal.png");
      case 3:
        return require("../../assets/images/charactor/turtle.png");
      default:
        return null;
    }
  };
  /**
   * userInfo.charId
   * 0 seal
   * 1 dolphin
   * 2 turtle
   * 3 fish
   */

  return (
    <View>
      <View style={styles.character}>
        <Image style={styles.image} source={getImageSource()} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  character: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "$Blue03",
    borderRadius: 10,
    margin: 20,
    width: 300,
    height: 250,
  },

  image: {
    width: 100,
    height: 100,
  },
});
