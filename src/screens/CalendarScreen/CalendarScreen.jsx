import { View } from "react-native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { SubTitle, MainTitle } from "../../components/common/CustomText";
import { CalendarComponent } from "../../components/Calendar/CalendarComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { getItem } from "../../utils/asyncStorage";
import axios from "axios";

function CalendarScreen() {
  const { userInfo } = useUserInfo();
  const navigation = useNavigation();
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2024);
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const accessToken = await getItem("accessToken");
      const refreshToken = await getItem("refreshToken");

      const response = await axios.get(
        `http://13.124.240.85:8080/stat/monthly?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: refreshToken,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [month, year]);

  return (
    <View style={styles.container}>
      <BackBar navigation={navigation} />
      <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
          <MainTitle text={`${month}월 리포트 `} />
          <Icon name="calendar" size={25} />
        </View>
        <View style={styles.titleView}>
          <SubTitle text={`${userInfo.realName}님!`} style={styles.subtitle} />
          <SubTitle
            text={`${month}월 줍깅 횟수는 ${data.monthlyPlog || 0}번 입니다.`}
            style={[styles.backgroudColor, styles.subtitle]}
          />
          <SubTitle
            text={`이번달 획득 포인트는 ${data.monthlyScore || 0}P 입니다.`}
            style={styles.subtitle}
          />
        </View>
        <View style={styles.calendarView}>
          <CalendarComponent
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            data={data}
          />
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
