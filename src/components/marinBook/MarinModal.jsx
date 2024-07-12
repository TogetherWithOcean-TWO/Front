import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import EStyleSheet from "../../styles/global";
import { SubTitle } from "../common/CustomText";

export const MarinModal = ({ visible, onClose, nameKr, text, image }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image style={styles.img} source={image} />
          <SubTitle text={nameKr} />
          <Text style={styles.modalText}>{text}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$White02",
  },
  modalView: {
    width: 280,
    backgroundColor: "$White01",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    textAlign: "center",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 16,
    margin: 15,
  },
  img: {
    width: 200,
    height: 200,
  },
});
