import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Circle } from "react-native-svg";
import EStyleSheet from "../../styles/global";
import { DetailDay } from "./DetailDay";
import { format } from "date-fns";
import IconOcticons from "react-native-vector-icons/Octicons";

// 한국어 설정
LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};
LocaleConfig.defaultLocale = "kr";

export const CalendarComponent = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useState(today);
  const [markedDates, setMarkedDates] = useState({
    [today]: { selected: true },
  });

  const onDayPress = (day) => {
    setDate(day.dateString);
    setMarkedDates({
      [day.dateString]: { selected: true },
    });
    // console.log(day);
  };

  return (
    <View style={styles.calendar}>
      <Calendar
        theme={{
          todayTextColor: "black",
          textDayFontSize: 15,
          textMonthFontSize: 18,
          textSectionTitleColor: "#032661",
          textDayFontFamily: "Pretendard",
          textMonthFontFamily: "Pretendard",
          textSectionTitleFontFamily: "Pretendard",
          textMonthFontWeight: "bold",
        }}
        onDayPress={onDayPress}
        hideExtraDays={true}
        monthFormat={"M월"}
        onMonthChange={(month) => {
          console.log(month);
        }}
        renderArrow={(direction) =>
          direction === "left" ? (
            <Icon name="angle-left" color={"grey"} size={20} />
          ) : (
            <Icon name="angle-right" color={"grey"} size={20} />
          )
        }
        markingType={"custom"}
        markedDates={markedDates}
        dayComponent={({ date, state }) => {
          const isSelected = markedDates[date.dateString]?.selected;
          return (
            <TouchableOpacity
              onPress={() => onDayPress(date)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
                backgroundColor: isSelected ? "#65558F30" : "white",
                borderRadius: 20,
              }}
            >
              <Svg height="40" width="40">
                <Circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#A8A8A850"
                  strokeWidth="4"
                />
                {/* 핑크 30% */}
                <Circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#B96D6D"
                  strokeWidth="4"
                  strokeDasharray="30 70"
                />
                {/* 하늘색 30% */}
                <Circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#67C9CA"
                  strokeWidth="4"
                  strokeDasharray="30 70"
                  rotation="90"
                  origin="20,20"
                />
                {/* 초록색 나머지 */}
                <Circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#B8B977"
                  strokeWidth="4"
                  strokeDasharray="40 60"
                  rotation="180"
                  origin="20,20"
                />
              </Svg>
              <Text
                style={{
                  position: "absolute",
                  color: state === "disabled" ? "gray" : "black",
                  fontFamily: "Pretendard",
                }}
              >
                {date.day}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.calendarTextView}>
        <Text style={[styles.calendarText, { color: "#B96D6D" }]}>
          <IconOcticons name="dot-fill" style={styles.dotIcon} />
          {" 걷깅"}
        </Text>
        <Text style={[styles.calendarText, { color: "#67C9CA" }]}>
          <IconOcticons name="dot-fill" style={styles.dotIcon} />
          {" 줍깅"}
        </Text>
        <Text style={[styles.calendarText, { color: "#B8B977" }]}>
          <IconOcticons name="dot-fill" style={styles.dotIcon} />
          {" 출석"}
        </Text>
      </View>
      <DetailDay date={date} />
    </View>
  );
};

const styles = EStyleSheet.create({
  calendar: {
    justifyContent: "center",
    width: 350,
  },
  calendarText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  calendarTextView: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
  },
  dotIcon: {},
});
