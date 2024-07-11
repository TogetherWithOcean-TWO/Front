import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import EStyleSheet from "../../styles/global";
import { useUserInfo } from "../../contexts/UserInfoContext";
import { getImageSource } from "../common/CommonUtils";
import { background } from "../../constants/storeItem/background";

export const ItemBox = () => {
  const { userInfo } = useUserInfo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const itemsPerPage = 8;
  const pages = Math.ceil(userInfo.userItem.length / itemsPerPage);

  const handleScroll = (event) => {
    const slideSize = 330; // 페이지 너비와 동일하게 설정
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        onContentSizeChange={() => {
          // 왼쪽 및 오른쪽 끝에서 추가 스크롤 제한
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
              x: currentIndex * 330,
              animated: false,
            });
          }
        }}
      >
        {Array.from({ length: pages }).map((_, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            {userInfo.userItem
              .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
              .map((item, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    style={styles.image}
                    source={getImageSource(item.category, item.name)}
                  />
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {Array.from({ length: pages }).map((_, pageIndex) => (
          <View
            key={pageIndex}
            style={[
              styles.dot,
              {
                backgroundColor:
                  pageIndex === currentIndex ? "#00000080" : "#cccccc80",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  page: {
    marginTop: 20,
    width: 330,
    height: 240,
    backgroundColor: "$Blue02",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
    paddingVertical: 35,
  },
  image: {
    width: 55,
    height: 55,
    margin: 12,
  },
  pagination: {
    position: "absolute",
    top: 240,
    left: 150,
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
