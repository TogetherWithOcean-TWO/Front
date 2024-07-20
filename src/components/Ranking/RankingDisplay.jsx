import { Text, View } from "react-native";
import React from "react";
import EStyleSheet from "../../styles/global";
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
  
  const getRank = (rank) => {
    switch(rank) {
      case 1 :
        return <Icon name="trophy" size={28} color="#FFD700"/>
       case 2 :
        return <Icon name="trophy" size={28} color="#C0C0C0"/>
       case 3 :
        return <Icon name="trophy" size={28} color="#CD7F32"/>
       default : 
        return <Text style={styles.rankText}>{rank}</Text>
    }
  }

  export const RankingDisplay = ({
    rank,
    nickname,
    score
  }) => {
    if(!nickname && !score){
      return null;
    }
    return (
      <View style={styles.rankingContainer}>
        <View style = {styles.rank}>
            {getRank(rank)}
        </View>
      <View style={styles.rankingDisplay}>
          <Text style={styles.input}>{nickname}</Text>
          <Text style={styles.input}>{score}</Text>
        </View>
      </View>
    );
  };

  export const MyRanking = ({
    rank, 
    nickname,
    score
  }) => {
    if(!nickname && !score){
      return null;
    }
    return (
      <View style={styles.rankingContainer}>
        <View style = {styles.rank}>
            {getRank(rank)}
        </View>
      <View style={styles.myRanking}>
          <Text style={styles.input}>{nickname}</Text>
          <Text style={styles.input}>{score}</Text>
        </View>
      </View>
    );
  };

  const styles = EStyleSheet.create({
    input: {
      padding: 15,
      marginVertical: 2,
      fontFamily: "Pretendard",
      color : "$Blue01"
    },
    rankingContainer : {
      flexDirection : "row",
      alignItems : "center",
    },
    rankingDisplay : {
      flex : 1,
      flexDirection : "row",
      backgroundColor: "$Blue02",
      borderRadius : 10,
      marginVertical : 5,
      justifyContent : "space-between"
    },
    myRanking : {
      flex : 1,
      flexDirection : "row",
      backgroundColor: "$Blue07",
      borderRadius : 10,
      marginVertical : 5,
      justifyContent : "space-between"
    },
    rankText : {
      fontFamily: "Pretendard",
      color : "$Blue01"
    },
    rank : {
      flex : 0.15,
      marginRight : 5,
      marginLeft : -10,
      alignItems : "center"
    }
  });