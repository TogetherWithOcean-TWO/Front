import {React, useState} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import { useNavigation } from "@react-navigation/native"

import EStyleSheet from "react-native-extended-stylesheet"

import { BackBar } from "../../components/common/CustomBar"
import { MainTitle } from "../../components/common/CustomText"
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { RankingDisplay } from "../../components/Ranking/RankingDisplay"

function RankingScreen(){
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState("전체");

    const showRanking=()=>{
        if(selectedTab==="전체"){
            return(
                <> 
                <RankingDisplay rank={1} nickname="부산 해운대 주인장" score={12345678} />
                <RankingDisplay rank={2} nickname="서울 영등포구 주민" score={12345678} />
                <RankingDisplay rank={3} nickname="바다좋아해" score={12345678} />
                <RankingDisplay rank={4} nickname="부산 해운대 해수욕장" score={12345678} />
                <RankingDisplay rank={5} nickname="부산 해운대 해수욕장" score={12345678} />
                <RankingDisplay />
                <RankingDisplay />
                <RankingDisplay />
                <RankingDisplay />
                <RankingDisplay />
                </>
            )
        } else {
            return(
            <> 
            <RankingDisplay rank={1} nickname="부산 해운대 주인장" score={12345678} />
            <RankingDisplay rank={2} nickname="서울 영등포구 주민" score={12345678} />
            <RankingDisplay rank={3} nickname="바다좋아해" score={12345678} />
            <RankingDisplay rank={4} nickname="부산 해운대 해수욕장" score={12345678} />
            <RankingDisplay rank={5} nickname="부산 해운대 해수욕장" score={12345678} />
            <RankingDisplay />
            <RankingDisplay />
            <RankingDisplay />
            <RankingDisplay />
            <RankingDisplay />
            </>
            )
        }
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
                <View style={styles.area}>
                    <TouchableOpacity style={[styles.button, selectedTab === "전체" && styles.selectedButton]} onPress={()=>setSelectedTab("전체")}>
                        <Text style={[styles.buttonText, selectedTab === "전체" && styles.selectedButtonText]}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, selectedTab === "우리지역" && styles.selectedButton]} onPress={()=>setSelectedTab("우리지역")}>
                        <Text style={[styles.buttonText, selectedTab === "우리지역" && styles.selectedButtonText]}>우리지역</Text>
                    </TouchableOpacity>
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
      area : {
        flexDirection : "row",
        marginHorizontal : -25,
        marginVertical : 15,
      },
      button : {
        flex : 1,
        alignItems : "center",
        padding : 15,
        backgroundColor : "$White01",
        borderTopRightRadius : 10,
        borderTopLeftRadius : 10,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      },
      selectedButton: {
        backgroundColor: "$Blue06",
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
    
});
export default RankingScreen;

