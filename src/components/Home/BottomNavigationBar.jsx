// 홈 하단바
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";
import axios from "axios";

const BottomNavigationBar = ({ navigation }) => {
  const iconColor = EStyleSheet.value("$Blue01");
  const startColor = EStyleSheet.value("$White01");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("RequestTrashBag")}
      >
        <Icon name="bag-outline" size={30} color={iconColor} />
        <Text style={styles.label}>봉투신청</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Ranking")}
      >
        <Icon name="trophy-outline" size={30} color={iconColor} />
        <Text style={styles.label}>랭킹</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.startButtonContainer}
        onPress={() => navigation.navigate("Walking", {startTime : Date.now() })}
      >
        <View style={styles.startButton}>
          <Icon name="walk-outline" size={40} color={startColor} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Icon name="calendar-outline" size={30} color={iconColor} />
        <Text style={styles.label}>캘린더</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Settings")}
      >
        <Icon name="settings-outline" size={30} color={iconColor} />
        <Text style={styles.label}>설정</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "$Blue04",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
    color: "$Blue01",
    marginTop: 5,
  },
  startButtonContainer: {
    position: "relative",
    bottom: 30, // 버튼이 바 위에 걸쳐있게
    alignItems: "center",
    flex: 1,
  },
  startButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "$Blue01",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black", // 그림자 색상
    shadowOpacity: 0.3, // 그림자 불투명도
    shadowOffset: { width: 0, height: 3 }, // 그림자 오프셋
    shadowRadius: 3, // 그림자 반경
  },
});

export default BottomNavigationBar;
