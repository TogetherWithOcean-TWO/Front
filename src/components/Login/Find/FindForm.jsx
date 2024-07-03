import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { IdCheckBtn } from "./Button";

export const FindIdForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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
            <IdCheckBtn />
        </View>
    );
};

export const FindPWForm = () => {
    return (
        <View>
            <Text>비밀번호 찾기</Text>
        </View>
    );
};

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
});
