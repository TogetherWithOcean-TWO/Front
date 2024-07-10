import { View, Text} from "react-native";
import EStyleSheet from "../../styles/global";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가

export const Timer = ({isActive}) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let interval = null;
        
        if(isActive){
            interval = setInterval(()=>{
                setSeconds((seconds)=>seconds+1);
            }, 1000);
        }
        else{
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds/3600);
        const minutes = Math.floor((totalSeconds%3600)/60);
        const seconds = totalSeconds%60;
        return `${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`;
    }
    return(
        <View>
            <View style={styles.timer}>
            <Icon 
                name="alarm-outline"
                size={32}
                style = {styles.timerIcon}
            />
                <Text style={styles.time}>{formatTime(seconds)}</Text>
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    timer : {
        backgroundColor: "$Blue02",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flexDirection : "row",
        paddingVertical : 15,
    },
    time : {
        color : "$Blue01",
        fontWeight : "bold",
        fontSize : 35,
        margin : 10
    }, 
    timerIcon : {
        color : "$Blue01"
    }
});