import { View } from "react-native";
import EStyleSheet from "../../styles/global";
import { SubTitle } from "../common/CustomText";

import Icon from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useState } from "react";

export const DetailDay = ({ date, dayData }) => {
  var year = date.split("-")[0];
  var month = date.split("-")[1];
  var day = date.split("-")[2];

  // const [walking, setWalking] = useState("9,000");
  const [trashNum, setTrashNum] = useState(1);
  const [location, setLocation] = useState(["해운대 해수욕장", "dks"]);

  return (
    <View>
      <View style={styles.titleView}>
        <SubTitle text={`${year}년 ${month}월 ${day}일`} />
      </View>
      <View style={styles.textView}>
        <Icon style={styles.icon} name="walking" size={30} />
        <SubTitle text={`${dayData.step} 걸음`} />
      </View>
      <View style={styles.textView}>
        <Icon style={styles.icon} name="trash-alt" size={28} />
        <SubTitle text={`쓰레기 ${dayData.trashBag} 봉`} />
      </View>
      <View style={styles.textView}>
        <IconEntypo style={styles.icon} name="location" size={28} />
        <SubTitle text={`${dayData.visit}`} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  titleView: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "$Blue02",
    borderRadius: 10,
  },
  textView: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 13,
    color: "$Blue01",
  },
});
