import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { IdCheckBtn, PWNextBtn, PWCheckBtn } from "./Button";
import { FindIdModal } from "./Modal";


export const FindIdForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);


    return (
        <View style={styles.findIdForm}>
            <View style={styles.inputForm}>
                <Text style={styles.label}>이름</Text>
                <TextInput
                    style={styles.nameInput}
                    value={name}
                    onChangeText={setName}
                    placeholder="이름을 입력해주세요."
                />
            </View>
            <View style={styles.inputForm}>
                <Text style={styles.label}>전화번호</Text>
                <View style={styles.certificationView}>
                    <TextInput
                        style={styles.pnInput}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder="가입하신 전화번호를 입력해주세요."
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.certificationBtn}>
                        <Text style={styles.certificationBtnText}>인증 코드</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputForm}>
                <Text style={styles.label}>인증 번호</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="인증 코드 4자리를 입력해주세요."
                    keyboardType="numeric"
                />
            </View>
            {/* <IdCheckBtn /> */}
            <FindIdModal isSuccess={isSuccess}/>
        </View>
    );
};

export const FindPWForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <View style={styles.findIdForm}>
            <View style={styles.inputForm}>
                <Text style={styles.label}>이름</Text>
                <TextInput
                    style={styles.nameInput}
                    value={name}
                    onChangeText={setName}
                    placeholder="이름을 입력해주세요."
                />
            </View>
            <View style={styles.inputForm}>
                <Text style={styles.label}>이메일</Text>
                <View style={styles.certificationView}>
                    <TextInput
                        style={styles.pnInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="가입하신 이메일을 입력해주세요."
                    />
                    <TouchableOpacity style={styles.certificationBtn}>
                        <Text style={styles.certificationBtnText}>인증 코드</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputForm}>
                <Text style={styles.label}>인증 번호</Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="인증 코드 4자리를 입력해주세요."
                    keyboardType="numeric"
                />
            </View>
            <PWNextBtn setPwNextCheck={props.setPwNextCheck}/>
        </View>
    );
};

export const FindPWNextForm = () => {
    const [newPW, setNewPW] = useState("");
    const [newPWCheck, setNewPWCheck] = useState("");
    
    return(
        <View style={styles.findIdForm}>
            <View style={styles.inputForm}>
                <Text style={styles.label}>비밀번호 재설정</Text>
                <TextInput
                    style={styles.nameInput}
                    value={newPW}
                    onChangeText={setNewPW}
                    placeholder="비밀번호를 재설정해주세요."
                    secureTextEntry = {true}
                />
                <Text style={styles.alret}>영문, 숫자, 특수문자 조합 10~15자로 입력해주세요.</Text>
            </View>
            <View style={styles.inputForm}>
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput
                    style={styles.nameInput}
                    value={newPWCheck}
                    onChangeText={setNewPWCheck}
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    secureTextEntry = {true}
                />
                {newPW !=="" ?
                    (newPW!==newPWCheck?<Text style={styles.alret}>비밀번호가 일치하지 않습니다.</Text>:
                    <Text style={styles.correct}>비밀번호가 일치합니다.</Text>):<Text></Text>}
                
                
                
                
            </View>
            <PWCheckBtn/>
        </View>
    )
}

const styles = StyleSheet.create({
    findIdForm: {
        padding: 25,
        paddingTop: 0,
        height:"100%",
    },
    inputForm: {
        marginBottom: 25,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#032661",
        marginBottom: 10,
    },
    nameInput: {
        height: 50, // 높이를 키워서 텍스트가 잘리지 않도록 수정
        backgroundColor: "#03266115",
        padding: 10, // 패딩 수정
        fontSize: 16,
        borderRadius: 10,
    },
    pnInput: {
        width: "75%",
        height: 50, // 높이를 키워서 텍스트가 잘리지 않도록 수정
        backgroundColor: "#03266115",
        padding: 10, // 패딩 수정
        fontSize: 16,
        borderRadius: 10,
    },
    certificationView: {
        flexDirection: "row",
        alignItems: "center",
    },
    certificationBtn: {
        backgroundColor: "#032661",
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    certificationBtnText: {
        color: "#fff",
        fontSize: 16,
    },
    alret:{
        color:"#C60000",
        padding: 2,
        fontWeight:"bold"
    },
    correct:{
        color:"#238500",
        padding: 2,
        fontWeight:"bold"
    }
});
