import {React, useState} from "react"
import {ScrollView, Text, TouchableOpacity, View} from "react-native"
import { useNavigation } from "@react-navigation/native"

import EStyleSheet from "react-native-extended-stylesheet"

import { BackBar } from "../../components/common/CustomBar"
import { MainTitle } from "../../components/common/CustomText"
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { MyRanking, RankingDisplay } from "../../components/Ranking/RankingDisplay"

function RankingScreen(){
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("전체");

    const showRanking=()=>{
            return(
                <ScrollView style={styles.ranking}> 
                    <MyRanking rank={"나"} nickname="용인불주먹" score={12345678} />
                    <RankingDisplay rank={1} nickname="부산 해운대 주인장" score={12345678} />
                    <RankingDisplay rank={2} nickname="서울 영등포구 주민" score={12345678} />
                    <RankingDisplay rank={3} nickname="바다좋아해" score={12345678} />
                    <RankingDisplay rank={4} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={5} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={6} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={7} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={8} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={9} nickname="부산 해운대 해수욕장" score={12345678} />
                    <RankingDisplay rank={10} nickname="부산 해운대 해수욕장" score={12345678} />
                </ScrollView>
            )
    }
    
    return (
        <View style={{flex : 1}}>
            <BackBar navigation={navigation}/>
            <View style={styles.container}>
                <View style={styles.mainTitleWithIcon}>
                    <MainTitle text="이번주 랭킹"/>
                    <Icon
                        name="ribbon-outline"
                        size={32}
                        padding={5}
                    />
                </View>
                {showRanking()}
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "$White01",
    },
    mainTitleWithIcon: {
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "row",
        position: "relative",
      },
      buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "$Gray01",
      },
      selectedButtonText: {
        color: "$Blue01",
      },
      ranking : {
        paddingVertical : 10,
        paddingHorizontal : -10
      }
});
export default RankingScreen;

