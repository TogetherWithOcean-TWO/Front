import React from "react";
import { View, Text, Image } from "react-native";
import EStyleSheet from "../../styles/global";
import PointIcon from "react-native-vector-icons/FontAwesome5";

const getImageSource = (category, itemName) => {
  switch (category) {
    case "sea":
      switch (itemName) {
        case "nemo":
          return require("../../assets/images/storeItem/sea/nemo.png");
        case "shark":
          return require("../../assets/images/storeItem/sea/shark.png");
        case "clam":
          return require("../../assets/images/storeItem/sea/clam.png");
        case "conch":
          return require("../../assets/images/storeItem/sea/conch.png");
        case "seaweed":
          return require("../../assets/images/storeItem/sea/seaweed.png");
        case "shirimp":
          return require("../../assets/images/storeItem/sea/shirimp.png");
        case "squid":
          return require("../../assets/images/storeItem/sea/squid.png");
        case "crab":
          return require("../../assets/images/storeItem/sea/crab.png");
        case "threeFishs":
          return require("../../assets/images/storeItem/sea/threeFishs.png");
        default:
          return null;
      }
    case "instrument":
      switch (itemName) {
        case "bell":
          return require("../../assets/images/storeItem/instrument/bell.png");
        case "drum":
          return require("../../assets/images/storeItem/instrument/drum.png");
        case "guitar":
          return require("../../assets/images/storeItem/instrument/guitar.png");
        case "melodeon":
          return require("../../assets/images/storeItem/instrument/melodeon.png");
        case "microphone":
          return require("../../assets/images/storeItem/instrument/microphone.png");
        case "recorder":
          return require("../../assets/images/storeItem/instrument/recorder.png");
        case "tambourine":
          return require("../../assets/images/storeItem/instrument/tambourine.png");
        case "trumpet":
          return require("../../assets/images/storeItem/instrument/trumpet.png");
        case "violin":
          return require("../../assets/images/storeItem/instrument/violin.png");
        default:
          return null;
      }
    case "background":
      switch (itemName) {
        case "beachBall":
          return require("../../assets/images/storeItem/background/beachBall.png");
        case "parasol":
          return require("../../assets/images/storeItem/background/parasol.png");
        case "diamond":
          return require("../../assets/images/storeItem/background/diamond.png");
        case "bonfire":
          return require("../../assets/images/storeItem/background/bonfire.png");
        case "star":
          return require("../../assets/images/storeItem/background/star.png");
        case "sunglasses":
          return require("../../assets/images/storeItem/background/sunglasses.png");
        case "broomstick":
          return require("../../assets/images/storeItem/background/broomstick.png");
        case "sandCastle":
          return require("../../assets/images/storeItem/background/sandCastle.png");
        case "hat":
          return require("../../assets/images/storeItem/background/hat.png");
        default:
          return null;
      }
    case "fruit":
      switch (itemName) {
        case "banana":
          return require("../../assets/images/storeItem/fruit/banana.png");
        case "coconut":
          return require("../../assets/images/storeItem/fruit/coconut.png");
        case "lemon":
          return require("../../assets/images/storeItem/fruit/lemon.png");
        case "mango":
          return require("../../assets/images/storeItem/fruit/mango.png");
        case "orange":
          return require("../../assets/images/storeItem/fruit/orange.png");
        case "peach":
          return require("../../assets/images/storeItem/fruit/peach.png");
        case "pear":
          return require("../../assets/images/storeItem/fruit/pear.png");
        case "pineapple":
          return require("../../assets/images/storeItem/fruit/pineapple.png");
        case "watermelon":
          return require("../../assets/images/storeItem/fruit/watermelon.png");
        default:
          return null;
      }
    case "food":
      switch (itemName) {
        case "cake":
          return require("../../assets/images/storeItem/food/cake.png");
        case "croissant":
          return require("../../assets/images/storeItem/food/croissant.png");
        case "hamburgur":
          return require("../../assets/images/storeItem/food/hamburgur.png");
        case "parfait":
          return require("../../assets/images/storeItem/food/parfait.png");
        case "pizza":
          return require("../../assets/images/storeItem/food/pizza.png");
        case "popcorn":
          return require("../../assets/images/storeItem/food/popcorn.png");
        case "ramen":
          return require("../../assets/images/storeItem/food/ramen.png");
        case "sushi":
          return require("../../assets/images/storeItem/food/sushi.png");
        case "waffle":
          return require("../../assets/images/storeItem/food/waffle.png");
        default:
          return null;
      }
    case "etc":
      switch (itemName) {
        case "band":
          return require("../../assets/images/storeItem/etc/band.png");
        case "camera":
          return require("../../assets/images/storeItem/etc/camera.png");
        case "campingCar":
          return require("../../assets/images/storeItem/etc/campingCar.png");
        case "cookieman":
          return require("../../assets/images/storeItem/etc/cookieman.png");
        case "fan":
          return require("../../assets/images/storeItem/etc/fan.png");
        case "santaHat":
          return require("../../assets/images/storeItem/etc/santaHat.png");
        case "sweetPotato":
          return require("../../assets/images/storeItem/etc/sweetPotato.png");
        case "umbrella":
          return require("../../assets/images/storeItem/etc/umbrella.png");
        case "vane":
          return require("../../assets/images/storeItem/etc/vane.png");
        default:
          return null;
      }
    default:
      return null;
  }
};

export const ItemBox = (props) => {
  const { category, item } = props;
  const imageSource = getImageSource(category, item.name);

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.box}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.pointView}>
          <PointIcon style={styles.icon} name="coins" size={15} />
          <Text style={styles.text}>{item.point}</Text>
        </View>
        <Text style={styles.text}>{item.nameKr}</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  box: {
    backgroundColor: "$White01",
    width: 100,
    height: 150,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 2,
  },
  pointView: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    padding: 3,
    left: -3,
    top: -2,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Pretendard",
    color: "$Blue01",
    fontSize: 16,
  },
});
