import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ChooseFindBar } from './ChooseFindBar';
import { FindIdForm, FindPWForm, FindPWNextForm } from './FindForm';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const TopBar = () => {
return (
    <View style={styles.topBar}>
        <Icon style={styles.leftArrow} name="arrow-back-ios" size={32}  />
    </View>
);}

export const Main = () => {
    const [selectIdOrPW, setSelectIdOrPW] = useState(true); // id->true, pw->false
    const [pwNextCheck, setPwNextCheck] = useState(false);

    return (
        // navigation 사용 안한버전
        <View style={styles.main}>
            <ChooseFindBar selectIdOrPW={selectIdOrPW} setSelectIdOrPW={setSelectIdOrPW} setPwNextCheck={setPwNextCheck}/>
            {selectIdOrPW?<FindIdForm/>:
            (pwNextCheck?<FindPWNextForm/>:<FindPWForm setPwNextCheck={setPwNextCheck}/>)
            }
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
        color: "#032661"
    },
    main: {
        width: "100%",
        height: "87%",
        backgroundColor: '#fff',
      },
  });