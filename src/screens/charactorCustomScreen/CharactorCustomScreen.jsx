import { TouchableOpacity, View, Text } from "react-native";
import { BackBarWithPoint } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { CharactorCustomForm } from "../../components/CharactorCustom/CharactorCustomForm";
import { LabelTitle } from "../../components/common/CustomText";
import { ItemBox } from "../../components/CharactorCustom/ItemBox";
import { ButtonView } from "../../components/CharactorCustom/ButtonView";

function CharactorCustomScreen() {
  return (
    <View style={styles.container}>
      <BackBarWithPoint />
      <LinearGradient
        colors={["#FFFFFF", "#95AAD4", "#28406D"]}
        style={styles.mainContainer}
      >
        <LabelTitle text="테두리 안으로만 꾸며주세요!" />
        <CharactorCustomForm />
        <ButtonView />
        <ItemBox />
      </LinearGradient>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$White01",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "$Blue01",
    alignItems: "center",
    padding: 30,
  },
  btnView: {
    display: "flex",
    flexDirection: "row",
  },
  deleteBtn: {
    backgroundColor: "$White03",
    width: 70,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // right: 125,
  },
  btn: {
    backgroundColor: "$White03",
    width: 70,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // left: 125,
  },
  btnText: {
    jusifyContent: "center",
    alginItems: "center",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 15,
  },
});

export default CharactorCustomScreen;
