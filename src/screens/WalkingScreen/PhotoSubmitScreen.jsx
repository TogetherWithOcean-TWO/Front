import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import EStyleSheet from "../../styles/global";

import { BackBar } from "../../components/common/CustomBar";
import { MainTitle } from "../../components/common/CustomText";

import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { PhotoSubmitForm } from "../../components/Walking/PhotoSubmitForm";
import { SmallButton, WideButton } from "../../components/common/CustomButton";
import { EditModal, TwoConfirmationModal } from "../../components/common/Modal";

function PhotoSubmitScreen() {
  const navigation = useNavigation();
  const [editModalVisible, setEditModalVisible] = useState(true);
  const [submitModalVisible, setSubmitModalVisible] = useState(false);
  const [inputCount, setInputCount] = useState("");
  const [trashCount, setTrashCount] = useState(0);
  const route = useRoute();
  const { uri } = route.params || {};

  const camera = () => {
    if (!editModalVisible) {
      navigation.navigate("Camera");
    }
  };

  const openEditModal = () => {
    if (!uri) setEditModalVisible(true);
  };

  const closeEditModal = () => {
    const count = parseInt(inputCount, 10); // 문자열을 정수로 변환
    setTrashCount(count);
    setEditModalVisible(false);
  };

  const openSubmitModal = () => {
    setSubmitModalVisible(true);
  };

  const closeSubmitModal = () => {
    setSubmitModalVisible(false);
  };

  const goBack = () => {
    closeEditModal();
    navigation.goBack();
  };

  const handleNumbers = (text) => {
    if (/^\d*$/.test(text)) {
      setInputCount(text);
    }
  };

  const onPhotoSelected = (photoUri) => {
    navigation.setParams({ uri: photoUri });
  };

  return (
    <View style={{ flex: 1 }}>
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.mainTitleWithIcon}>
          <MainTitle text="사진기록"></MainTitle>
          <Icon
            name="camera-outline"
            size={32}
            padding={5}
          />
          <Text style={styles.trashCount}>{trashCount}개</Text>
          <SmallButton
            text="수량변경"
            onPress={openEditModal}
            style={styles.editButton}
            right={0}
          />
        </View>

        {uri ? (
          <PhotoSubmitForm
            camera={camera}
            onPhotoSelected={onPhotoSelected}
            uri={uri}
          />
        ) : (
          <PhotoSubmitForm camera={camera} onPhotoSelected={onPhotoSelected} />
        )}
        <WideButton text="다음" onPress={openSubmitModal} />
      </View>
      <EditModal
        visible={editModalVisible}
        onClose={closeEditModal}
        message="쓰레기 봉투를 몇 개 채우셨나요?"
        buttonText="확인"
        value={inputCount}
        placeholder="숫자로만 입력해주세요"
        numeric="true"
        goBack={goBack}
        onChangeText={handleNumbers}
      />
      <TwoConfirmationModal
        visible={submitModalVisible}
        onClose={closeSubmitModal}
        message={`${trashCount}개 등록하신게 맞나요?`}
        buttonText1="예"
        buttonText2="아니오"
        button1Behavior={null}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "$White01",
  },
  mainTitleWithIcon: {
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
    position: "relative",
  },
  trashCount: {
    color: "$Blue01",
    fontSize: "16px",
    fontWeight: "bold",
    position: "absolute",
    right: 70,
  },
  photo: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 15,
    height: "75%",
    marginVertical: 30,
  },
});

export default PhotoSubmitScreen;
