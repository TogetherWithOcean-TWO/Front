import { View, TouchableOpacity, Text } from "react-native";
import EStyleSheet from "../../styles/global";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome6";

export const ButtonView = () => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity style={[styles.itembtn, styles.btn]}>
        <Icon name="arrow-rotate-left" size={16} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.itembtn, styles.btn]}>
        <Icon name="arrow-rotate-right" size={16} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.itembtn, styles.btn]}>
        <DeleteIcon name="delete" size={18} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.saveBtn]}>
        <Text style={styles.btnText}>저장</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  btnView: {
    display: "flex",
    flexDirection: "row",
  },
  itembtn: {
    width: 50,
    marginHorizontal: 3,
  },
  saveBtn: {
    width: 80,
    marginLeft: 50,
  },
  btn: {
    backgroundColor: "$White03",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    jusifyContent: "center",
    alginItems: "center",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 15,
  },
});
