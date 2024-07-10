import { View, TouchableOpacity, Image } from "react-native";
import EStyleSheet from "../../styles/global";

import dolphin from "../../assets/images/charactor/dolphin.png";
import fish from "../../assets/images/charactor/fish.png";
import seal from "../../assets/images/charactor/seal.png";
import turtle from "../../assets/images/charactor/turtle.png";

import { useEffect } from "react";
import { useUserInfo } from "../../contexts/UserInfoContext";

export const CharactorForm = ({ setCharacterImage }) => {
  const { userInfo, setUserInfo } = useUserInfo();

  /**
   * userInfo.charId
   * 0 seal
   * 1 dolphin
   * 2 turtle
   * 3 fish
   */

  useEffect(() => {
    // 선택된 캐릭터에 따라 이미지를 설정
    switch (userInfo.charId) {
      case 0:
        setCharacterImage(seal);
        break;
      case 1:
        setCharacterImage(dolphin);
        break;
      case 2:
        setCharacterImage(turtle);
        break;
      case 3:
        setCharacterImage(fish);
        break;
      default:
        break;
    }
  }, [userInfo.charId]);
  return (
    <View>
      <View style={styles.character}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              userInfo.charId === 0 && styles.selectedButton,
            ]}
            onPress={() => setUserInfo({ ...userInfo, charId: 0 })}
          >
            <Image style={styles.image} source={seal} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              userInfo.charId === 1 && styles.selectedButton,
            ]}
            onPress={() => setUserInfo({ ...userInfo, charId: 1 })}
          >
            <Image style={styles.image} source={dolphin} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              userInfo.charId === 2 && styles.selectedButton,
            ]}
            onPress={() => setUserInfo({ ...userInfo, charId: 2 })}
          >
            <Image style={styles.image} source={turtle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              userInfo.charId === 3 && styles.selectedButton,
            ]}
            onPress={() => setUserInfo({ ...userInfo, charId: 3 })}
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
