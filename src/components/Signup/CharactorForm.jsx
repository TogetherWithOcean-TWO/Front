import { View, TouchableOpacity, Image } from "react-native";
import EStyleSheet from "../../styles/global";

import dolphin from "../../assets/images/charactor/dolphin.png";
import fish from "../../assets/images/charactor/fish.png";
import seal from "../../assets/images/charactor/seal.png";
import turtle from "../../assets/images/charactor/turtle.png";
import { useEffect } from "react";

export const CharactorForm = ({
  selectedCharacter,
  handleCharacterSelect,
  setCharacterImage,
}) => {
  useEffect(() => {
    // 선택된 캐릭터에 따라 이미지를 설정
    switch (selectedCharacter) {
      case "seal":
        setCharacterImage(seal);
        break;
      case "dolphin":
        setCharacterImage(dolphin);
        break;
      case "turtle":
        setCharacterImage(turtle);
        break;
      case "fish":
        setCharacterImage(fish);
        break;
      default:
        setCharacterImage;
    }
  }, [selectedCharacter]);
  return (
    <View>
      <View style={styles.character}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedCharacter === "seal" && styles.selectedButton,
            ]}
            onPress={() => handleCharacterSelect("seal")}
          >
            <Image style={styles.image} source={seal} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedCharacter === "dolphin" && styles.selectedButton,
            ]}
            onPress={() => handleCharacterSelect("dolphin")}
          >
            <Image style={styles.image} source={dolphin} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedCharacter === "turtle" && styles.selectedButton,
            ]}
            onPress={() => handleCharacterSelect("turtle")}
          >
            <Image style={styles.image} source={turtle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedCharacter === "fish" && styles.selectedButton,
            ]}
            onPress={() => handleCharacterSelect("fish")}
          >
            <Image style={styles.image} source={fish} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  character: {
    flex: 1,
    justifyContent: "center",
  },

  buttonContainer: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  button: {
    padding: 25,
    margin: 10,
    backgroundColor: "$White01",
    borderRadius: "15",
  },
  selectedButton: {
    padding: 25,
    margin: 10,
    backgroundColor: "$Blue02",
    borderRadius: "15",
  },
});
