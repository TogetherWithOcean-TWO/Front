import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { useUserItem } from "../../contexts/UserItemContext";
import { getImageSource } from "../common/CommonUtils";

export const CharactorCustomForm = ({
  selectedItemIndex,
  setSelectedItemIndex,
}) => {
  const { userInfo } = useUserInfo();
  const { userItemInfo } = useUserItem();

  const getCharactorImageSource = () => {
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

  const handleItemPress = (index) => {
    setSelectedItemIndex(index); // 선택된 아이템의 인덱스를 상태로 설정
  };

  return (
    <View>
      <View style={styles.character}>
        <Image style={styles.image} source={getCharactorImageSource()} />

        {userItemInfo.userItem.map((item, index) =>
          item.use ? (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemPress(index)}
              style={[
                styles.itemImg,
                selectedItemIndex === index && styles.selectedItem, // 선택된 아이템 스타일 적용
              ]}
            >
              <Image
                style={styles.itemImg}
                source={getImageSource(item.category, item.name)}
              />
            </TouchableOpacity>
          ) : null
        )}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  itemImg: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "transparent",
  },
  selectedItem: {
    borderWidth: 1,
    borderColor: "$Blue01",
    borderStyle: "dotted",
  },
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
  selectedText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "blue",
  },
});
