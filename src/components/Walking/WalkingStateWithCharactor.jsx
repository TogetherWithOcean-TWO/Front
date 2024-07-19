import { View, Image} from "react-native";
import EStyleSheet from "../../styles/global";
import dolphin from "../../assets/images/charactor/dolphin.png";
import { InfoText, ErrorText } from "../../components/common/CustomText";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";

export const WalkingScreenWithCharactor = ({startTime}) => {
    const characterImage=dolphin;
    const [stepCount, setStepCount] = useState(0);
    const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
    
    useEffect(()=>{
        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
            },
            error => {
                setIsPedometerAvailable(error);
            }
        );

        const subscription = Pedometer.watchStepCount(result => {
            // 현재 시간까지의 총 걸음 수를 업데이트
            Pedometer.getStepCountAsync(startTime, new Date()).then(
                result => {
                    setStepCount(result.steps);
                },
                error => {
                    console.error(error);
                }
            );
        });

        return () => subscription && subscription.remove();
    }, [startTime]);

    return(
        <View style = {styles.container}>
            <View style={styles.walkingState}>
                <InfoText text={`${stepCount} 걸음을 달성했어요!\n조금만 더 힘내세요!`}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={characterImage} />
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    container : {
        justifyContent : "center"
    },
    image: {
        width: 70,
        height: 70,
    },
    imageContainer : {
        alignItems : "center"
    },
    walkingState : {
        backgroundColor: "$White01",
        width : "45%",
        height : 70,
        margin : 20,
        borderRadius : 15,
        alignItems : "center",
        justifyContent : "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        },
});