import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackBar } from "../../components/common/CustomBar";
import { Timer } from "../../components/Walking/Timer";
import EStyleSheet from "../../styles/global";
import { HalfButton, WideButton } from "../../components/common/CustomButton";
import { WalkingScreenWithCharactor } from "../../components/Walking/WalkingStateWithCharactor";
import React, { useEffect, useState } from "react";

function WalkingScreen() {
  const navigation = useNavigation();
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleStopPress = () => {
    setIsTimerActive(!isTimerActive);
  };
  const next = () => {
    navigation.navigate("PhotoSubmit");
  };

  const ExitToMain = () => {
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {}, [isTimerActive]);

  return (
    <View style={{ flex: 1 }}>
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        <Timer isActive={isTimerActive} />
        <View
          style={[
            styles.walkingScreenWithCharacter,
            { marginBottom: isTimerActive ? 75 : 15 },
          ]}
        >
          <WalkingScreenWithCharactor />
        </View>
        {isTimerActive ? (
          <WideButton text="중지" onPress={handleStopPress} />
        ) : (
          <View style={styles.buttonContainer}>
            <WideButton
              text="사진올리기"
              backgroundColor={EStyleSheet.value("$Blue02")}
              textColor={EStyleSheet.value("$Blue01")}
              onPress={next}
            />
            <View style={styles.twoButtonContainer}>
              <HalfButton text="계속" onPress={handleStopPress} />
              <HalfButton text="종료" onPress={ExitToMain} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "$White01",
  },
  walkingScreenWithCharacter: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 55,
  },
  twoButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default WalkingScreen;
