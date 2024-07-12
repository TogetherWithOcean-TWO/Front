import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "../../styles/global";
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { CustomInput } from "./CustomInput";

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

export const EditModal = ({
  visible,
  onClose,
  message,
  buttonText,
  placeholder,
  value,
  secure,
  goBack,
  onChangeText,
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
          <View style={styles.closeModalGoback}>
            <Icon
              name="close-outline"
              size={20}
              style={styles.closeModal}
              padding={5}
              onPress={goBack}
            />
          </View>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.modalInput}>
            <CustomInput
              placeholder={placeholder}
              value={value}
              secure={secure}
              onChangeText={onChangeText}
            />
          </View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export const SelectModal = ({
  visible,
  onClose,
  selectItem1,
  selectItem2,
  selectBehavior1,
  selectBehavior2,
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
          <TouchableOpacity onPress={selectBehavior1}>
            <Text style={styles.modalText}>{selectItem1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectBehavior2}>
            <Text style={styles.modalText}>{selectItem2}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export const ConfirmationTwoButtonModal = ({
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
    padding: 20,
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
    fontWeight: "bold",
  },

  button: {
    fontFamily: "Pretendard",
    fontSize: 15,
    paddingHorizontal: 30,
  },
  closeModalGoback: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: -5,
    paddingBottom: 5,
  },
  modalInput: {
    width: "100%",
    marginTop: -10,
    paddingBottom: 20,
  },
  twobtn: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 45,
  },
});
