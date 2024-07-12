import { View, Image } from "react-native";
import { BackBar } from "../../components/common/CustomBar";
import EStyleSheet from "../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { MainTitle } from "../../components/common/CustomText";
import { MarinBook } from "../../components/marinBook/MarinBook";

function MarinBookScreen() {
  return (
    <View style={styles.container}>
      <BackBar />
      <LinearGradient
        colors={["#FFFFFF", "#95AAD4", "#28406D"]}
        style={styles.mainContainer}
      >
        <View style={styles.title}>
          <MainTitle text="나의 뱃지" />
          <Image
            style={styles.img}
            source={require("../../assets/images/badge.png")}
          />
        </View>
        <MarinBook />
        <View style={styles.imgView}>
          <Image
            style={styles.imgBackground}
            source={require("../../assets/images/badgeBackground.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$White01",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "$Blue01",
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
  },
  img: {
    top: 3,
    left: 5,
    width: 25,
    height: 25,
  },
  imgBackground: {
    width: 180,
    height: 180,
  },
  imgView: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default MarinBookScreen;
