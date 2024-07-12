import { TouchableOpacity, View, Image } from "react-native";
import EStyleSheet from "../../styles/global";
import { getMarinImageSource } from "./utils";
import { LabelTitle } from "../common/CustomText";
import { useState } from "react";
import { MarinModal } from "./MarinModal";

export const MarinComponent = ({ itemName, itemNameKr, mission }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={openModal}>
        <Image style={styles.img} source={getMarinImageSource(itemName)} />
        <LabelTitle text={mission} />
      </TouchableOpacity>
      <MarinModal
        visible={modalVisible}
        onClose={closeModal}
        nameKr={itemNameKr}
        text={"바키타돌고래는 어디살아용.\n 몇마리정도 남았어용"}
        image={getMarinImageSource(itemName)}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  box: {
    width: 95,
    height: 140,
    backgroundColor: "$White03",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
  },
});
