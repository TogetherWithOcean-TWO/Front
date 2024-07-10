import { View, Text, Image} from "react-native";
import EStyleSheet from "../../styles/global";
import dolphin from "../../assets/images/charactor/dolphin.png";
import { InfoText, ErrorText } from "../../components/common/CustomText";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";

export const WalkingScreenWithCharactor = () => {
    const characterImage=dolphin;
    const [stepCount, setStepCount] = useState(0);
    const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
    const [startTime, setStartTime] = useState(new Date()); //현재시각에 만보기 시작

    
    useEffect(()=>{
        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
            },
            error => {
                setIsPedometerAvailable(error);
            }
        );

        const subscription=Pedometer.watchStepCount(result=>{
            setStepCountSinceStart(result.steps);
        })

        const start = new Date();
        start.setHours(0,0,0,0);
        Pedometer.getStepCountAsync(start, new Date()).then(
            result => {
                setStepCount(result.steps);
            },
            error => {
                console(error);
            }
        );

        return () => subscription && subscription.remove();
    },[startTime]);
    

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
    },
});