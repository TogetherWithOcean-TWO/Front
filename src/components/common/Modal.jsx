import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "../../styles/global";

export const ConfirmationModal = ({
  visible,
  onClose,
  message,
  buttonText,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const TwoConfirmationModal = ({
  visible,
  onClose,
  message,
  buttonText1,
  buttonText2,
  onCheck,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.twobtn}>
            <TouchableOpacity onPress={onCheck}>
              <Text style={[styles.btn, styles.button]}>{buttonText1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.btn, styles.button]}>{buttonText2}</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 16,
  },

  button: {
    fontFamily: "Pretendard",
    fontSize: 15,
  },
  twobtn: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 45,
  },
});
