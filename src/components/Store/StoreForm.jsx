import React from "react";
import { View, Text, ScrollView } from "react-native";
import EStyleSheet from "../../styles/global";
import { ItemBox } from "./ItemBox";
import { sea } from "../../constants/storeItem/sea";
import { instrument } from "../../constants/storeItem/instrument";
import { background } from "../../constants/storeItem/background";
import { fruit } from "../../constants/storeItem/fruit";
import { food } from "../../constants/storeItem/food";
import { etc } from "../../constants/storeItem/etc";

export const StoreForm = (props) => {
  return (
    <View style={styles.container}>
      {props.category === "sea"
        ? sea.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
      {props.category === "instrument"
        ? instrument.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
      {props.category === "background"
        ? background.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
      {props.category === "fruit"
        ? fruit.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
      {props.category === "food"
        ? food.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
      {props.category === "etc"
        ? etc.map((item, index) => (
            <ItemBox
              key={index}
              index={index}
              category={props.category}
              item={item}
            />
          ))
        : null}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "100%",
  },
});
