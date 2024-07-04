import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


export const ChooseFindBar = (props) => {

    const onSelectId = () => {
        props.setSelectIdOrPW(true);
        props.setPwNextCheck(false);
    }
    const onSelectPW = () => {
        props.setSelectIdOrPW(false);
        props.setPwNextCheck(false);
    }

    return (
        <View style={styles.choosebtn}>
            <View style={props.selectIdOrPW?styles.selecView:styles.basicView}>
                <Text style={props.selectIdOrPW?styles.select:styles.basic} onPress={onSelectId}>
                    아이디 찾기
                </Text>
            </View>
            <View style={!props.selectIdOrPW?styles.selecView:styles.basicView}>
                <Text style={!props.selectIdOrPW?styles.select:styles.basic} onPress={onSelectPW}>
                    비밀번호 찾기
                </Text>
            </View>
        </View>
);}


const styles = StyleSheet.create({
    choosebtn: {
      width: "100%",
      height: 70,
      display: "flex",
      flexDirection:"row",
      alignItems:"center",
    },
    
    basic:{
        fontSize: 25,
        color:"#D9D9D9",
        
    },
    basicView: {
        marginLeft: 23,
    },
    select:{
        fontSize: 25,
        color:"#032661",
        fontWeight:"bold",
    },
    selecView:{
        marginLeft: 23,
        borderBottomWidth:2,
        borderBlockColor:"#032661"
    },

   
  });