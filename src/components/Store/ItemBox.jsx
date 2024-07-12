import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import EStyleSheet from "../../styles/global";
import PointIcon from "react-native-vector-icons/FontAwesome5";
import { ConfirmationModal, TwoConfirmationModal } from "../common/Modal";
import { getImageSource } from "../common/CommonUtils";
import { useUserInfo } from "../../contexts/UserInfoContext";
export const ItemBox = (props) => {
  const { category, item } = props;
  const imageSource = getImageSource(category, item.name);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [pointsAlertModal, setPointsAlertModal] = useState(false);
  const openAlertModal = () => {
    setPointsAlertModal(true);
  };

  const closeAlertModal = () => {
    setPointsAlertModal(false);
  };

  const { userInfo, setUserInfo } = useUserInfo();

  const buyItem = () => {
    var newPoint = userInfo.point - item.point;
    if (newPoint < 0) {
      //포인트가 부족합니다
      closeModal();
      openAlertModal();
      return;
    }
    setUserInfo({ ...userInfo, point: newPoint });
    closeModal();
  };

  return (
    <View style={styles.shadowContainer}>
      <TouchableOpacity onPress={openModal} activeOpacity={0.7}>
        <View style={styles.box}>
          <Image style={styles.image} source={imageSource} />
          <View style={styles.pointView}>
            <PointIcon style={styles.icon} name="coins" size={15} />
            <Text style={styles.text}>{item.point}</Text>
          </View>
          <Text style={styles.text}>{item.nameKr}</Text>
        </View>
      </TouchableOpacity>
      <TwoConfirmationModal
        visible={modalVisible}
        onClose={closeModal}
        onCheck={buyItem}
        message="구매하시겠습니까?"
        buttonText1="확인"
        buttonText2="닫기"
      />
      <ConfirmationModal
        visible={pointsAlertModal}
        onClose={closeAlertModal}
        message="포인트가 부족합니다."
        buttonText="확인"
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  box: {
    backgroundColor: "$White01",
    width: 100,
    height: 150,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 2,
    width: 55,
    height: 55,
  },
  pointView: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    padding: 3,
    left: -3,
    top: -2,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 16,
  },
});
