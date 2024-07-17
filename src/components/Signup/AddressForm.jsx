import { View, TouchableOpacity, Image, Platform, Modal, Text } from "react-native";
import { LabelTitle } from "../common/CustomText";
import { CustomInput } from "../common/CustomInput";
import EStyleSheet from "../../styles/global";
import Icon from "react-native-vector-icons/Foundation";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { useState, useEffect } from "react";
import Postcode from '@actbase/react-daum-postcode';
import { BackBar } from "../../components/common/CustomBar";

export const AddressForm = ({ setIsValid }) => {
  const { userInfo, setUserInfo } = useUserInfo();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    validate();
  }, [userInfo.postalCode, userInfo.address, userInfo.detailAddress]);

  const validate = () => {
    let valid = true;

    if (
      userInfo.postalCode === "" ||
      userInfo.address === "" ||
      userInfo.detailAddress === ""
    ) {
      valid = false;
    }

    setIsValid(valid);
  };

  const handleAddressSelect = (data) => {
    setUserInfo({ ...userInfo, postalCode: data.zonecode, address: data.address });
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={styles.label}>
        <LabelTitle text="주소" />
      </View>
      <View style={[styles.inputWithButton, styles.formGroup]}>
        <CustomInput
          placeholder="우편번호"
          value={userInfo.postalCode}
          onChangeText={(text) =>
            setUserInfo({ ...userInfo, postalCode: text })
          }
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Icon name="magnifying-glass" size={22} color="#A8A8A8" />
        </TouchableOpacity>
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="기본 주소"
          value={userInfo.address}
          onChangeText={(text) => setUserInfo({ ...userInfo, address: text })}
        />
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="상세 주소를 입력해주세요"
          value={userInfo.detailAddress}
          onChangeText={(text) =>
            setUserInfo({ ...userInfo, detailAddress: text })
          }
        />
      </View>
      <LabelTitle text="쓰레기 봉투를 배급 받으실 주소를 입력해주세요 :)" />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <BackBar navigation={{ goBack: () => setIsModalVisible(false) }} />
          <Postcode
            style={styles.postcode}
            jsOptions={{ animation: true, hideMapBtn: true }}
            onSelected={(data) => handleAddressSelect(data)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  label: {
    marginTop: 10,
  },
  formGroup: {
    marginVertical: 8,
  },
  inputWithButton: {
    position: "relative",
  },
  searchButton: {
    position: "absolute",
    right: 5,
    padding: 10,
  },

  modalContainer: {
    flex: 1,
  },
  postcode: {
    flex: 1,
  },
  
});
