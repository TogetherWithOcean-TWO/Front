import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ChooseFindBar } from './ChooseFindBar';
import { FindIdForm, FindPWForm } from './FindForm';

export const TopBar = () => {
return (
    <View style={styles.topBar}>
        {/* image btn -> 뒤로가기 btn */}
        <Image style={styles.leftArrow} source={require("../../../assets/images/left_arrow.png")}/>
    </View>
);}

export const Main = () => {
    const [selectIdOrPW, setSelectIdOrPW] = useState(true); // id->true, pw->false
    return (
        <View style={styles.main}>
            <ChooseFindBar selectIdOrPW={selectIdOrPW} setSelectIdOrPW={setSelectIdOrPW}/>
            {selectIdOrPW?<FindIdForm/>:<FindPWForm/>}
        </View>
    );
}
    


const styles = StyleSheet.create({
    topBar: {
      width: "100%",
      height: "13%",
      backgroundColor: '#fff',
      justifyContent: "center",
    },
    leftArrow: {
        top:20,
        left:15,
    },
    main: {
        width: "100%",
        height: "87%",
        backgroundColor: '#fff',
      },
  });