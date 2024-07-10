import { View, Text } from "react-native";
import EStyleSheet from "../../styles/global";
import { InfoText } from "../common/CustomText";

export const WalkingState = () => {

    return(
        <View style = {styles.container}>
            <View style={styles.walkingState}>
                <InfoText text={"hi"}/>
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    container : {
        justifyContent : "center"
    },
    imageContainer : {
        alignItems : "center"
    },
    walkingState : {
        backgroundColor: "$Blue02",
        height : 50,
        marginVertical : 20,
        borderRadius : 15,
        justifyContent : "center",
    },
});