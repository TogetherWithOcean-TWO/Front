import { View } from "react-native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { SubTitle, MainTitle } from "../../components/common/CustomText";
import { CalendarComponent } from "../../components/Calendar/CalendarComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

function CalendarScreen() {
  const { userInfo } = useUserInfo();
  const navigation = useNavigation();
  const [month, setMonth] = useState(7);
  return (
    <View style={styles.container}>
      <BackBar navigation={navigation} />
      <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
          <MainTitle text={`${month}월 리포트 `} />
          <Icon name="calendar" size={25} />
        </View>
        <View style={styles.titleView}>
          <SubTitle
            text={`${userInfo.realName} abc님!`}
            style={styles.subtitle}
          />
          <SubTitle
            text={`5월 줍깅 횟수는 5번 입니다.`}
            style={[styles.backgroudColor, styles.subtitle]}
          />
          <SubTitle
            text={`이번달 획득 포인트는 5,000P 입니다.`}
            style={styles.subtitle}
          />
        </View>
        <View style={styles.calendarView}>
          <CalendarComponent />
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  mainTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "$Blue01",
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "$White01",
  },
  backgroudColor: {
    backgroundColor: "$Blue02",
  },
  subtitle: {
    padding: 6,
  },
  titleView: { marginVertical: 3 },
  calendarView: {
    alignItems: "center",
  },
});

export default CalendarScreen;
