import React from "react";
import { View, Text } from "react-native";
import EStyleSheet from "../../styles/global";
import { ItemBox } from "./ItemBox";
import { sea } from "../../constants/storeItem";

export const StoreForm = (props) => {
  return (
    <View style={styles.container}>
      {console.log(sea.length)}
      {/* {sea.map((index)=><ItemBox index={index} title={} />)} */}
      {sea.map((item, index) => (
        <ItemBox
          key={index}
          index={index}
          name={item.name}
          nameKr={item.nameKr}
          imgurl={item.imgurl}
        />
      ))}
      {/* {sea.map((item, index) => console.log(item.name))} */}
      {/* <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox />
      <ItemBox /> */}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
