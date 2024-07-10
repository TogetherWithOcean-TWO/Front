import React, { useEffect } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "../../styles/global";

export const StoreBar = (props) => {
  const seletCategory = (text) => {
    props.setCategory(text);
  };

  /*
  sea, instrument, emotion, background, fruit, food, etc 
  */
  return (
    <View style={styles.choosebtn}>
      <View
        style={props.category === "sea" ? styles.selecView : styles.basicView}
      >
        <Text
          style={props.category === "sea" ? styles.select : styles.basic}
          onPress={() => seletCategory("sea")}
        >
          바다
        </Text>
      </View>
      <View
        style={
          props.category === "instrument" ? styles.selecView : styles.basicView
        }
      >
        <Text
          style={props.category === "instrument" ? styles.select : styles.basic}
          onPress={() => seletCategory("instrument")}
        >
          악기
        </Text>
      </View>
      <View
        style={
          props.category === "emotion" ? styles.selecView : styles.basicView
        }
      >
        <Text
          style={props.category === "emotion" ? styles.select : styles.basic}
          onPress={() => seletCategory("emotion")}
        >
          감정
        </Text>
      </View>

      <View
        style={
          props.category === "background" ? styles.selecView : styles.basicView
        }
      >
        <Text
          style={props.category === "background" ? styles.select : styles.basic}
          onPress={() => seletCategory("background")}
        >
          배경
        </Text>
      </View>
      <View
        style={props.category === "fruit" ? styles.selecView : styles.basicView}
      >
        <Text
          style={props.category === "fruit" ? styles.select : styles.basic}
          onPress={() => seletCategory("fruit")}
        >
          과일
        </Text>
      </View>

      <View
        style={props.category === "food" ? styles.selecView : styles.basicView}
      >
        <Text
          style={props.category === "food" ? styles.select : styles.basic}
          onPress={() => seletCategory("food")}
        >
          음식
        </Text>
      </View>

      <View
        style={props.category === "etc" ? styles.selecView : styles.basicView}
      >
        <Text
          style={props.category === "etc" ? styles.select : styles.basic}
          onPress={() => seletCategory("etc")}
        >
          기타
        </Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  choosebtn: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  basic: {
    fontSize: 20,
    color: "$Gray02",
    fontFamily: "Pretendard",
  },
  basicView: {
    marginLeft: 23,
  },
  select: {
    fontSize: 22,
    color: "$Blue01",
    fontWeight: "bold",
    fontFamily: "Pretendard",
    paddingBottom: 2,
  },
  selecView: {
    marginLeft: 23,
    borderBottomWidth: 2,
    borderBlockColor: "$Blue01",
  },
});
