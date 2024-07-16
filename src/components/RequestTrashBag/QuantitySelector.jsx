import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LabelTitle } from "../common/CustomText";
import EStyleSheet from "../../styles/global";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.formGroup}>
      <LabelTitle text="수량" style={styles.label}/>
      <View style={styles.selectorContainer}>
        <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={[styles.button, styles.plusButton]} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.note}>최대 쓰레기 봉투 등록 가능 개수는 {quantity}개 입니다</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  formGroup: {
    marginHorizontal: 25,
    marginTop: 20,
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  label:{
    marginBottom : 10,
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  selectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$Blue02",
    borderRadius: 5,
    //marginHorizontal: 10,
    //borderWidth: 2, // 테두리 두께
    //borderColor: 'black', // 테두리 색상
  },
  minusButton:{
    marginEnd: 10,
  },
  plusButton:{
    marginStart:10,
  },
  buttonText: {
    fontSize: 20,
    borderColor: '$Blue01', // 테두리 색상
    fontFamily: "Pretendard",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    color: "$Blue01",
    fontFamily: "Pretendard",
    
  },
  note: {
    marginTop: 20,
    fontSize: 14,
    color: "black",
    fontFamily: "Pretendard"
  },
});

export default QuantitySelector;

