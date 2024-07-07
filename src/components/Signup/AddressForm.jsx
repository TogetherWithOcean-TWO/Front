import { View, TouchableOpacity, Image } from "react-native";
import { LabelTitle } from "../common/CustomText";
import { CustomInput } from "../common/CustomInput";
import EStyleSheet from "../../styles/global";
import { useState } from "react";
import Icon from "react-native-vector-icons/Foundation";

export const AddressForm = () => {
  const [basicAddress, setBasicAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [postalNumber, setPostalNumber] = useState("");
  return (
    <View>
      <View style={styles.label}>
        <LabelTitle text="주소" />
      </View>
      <View style={[styles.inputWithButton, styles.formGroup]}>
        <CustomInput
          placeholder="우편번호"
          value={postalNumber}
          onChangeText={(text) => setPostalNumber(text)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            /* 검색 */
          }}
        >
          <Icon name="magnifying-glass" size={22} color="#A8A8A8" />
        </TouchableOpacity>
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="기본 주소"
          value={basicAddress}
          onChangeText={(text) => setBasicAddress(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="상세 주소를 입력해주세요"
          value={detailedAddress}
          onChangeText={(text) => setDetailedAddress(text)}
        />
      </View>
      <LabelTitle text="쓰레기 봉투를 배급 받으실 주소를 입력해주세요 :)" />
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
});
