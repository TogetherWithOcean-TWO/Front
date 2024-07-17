import Postcode from "@actbase/react-daum-postcode";
import { Modal, View } from "react-native";
import React, {useState}from "react";
import EStyleSheet from "react-native-extended-stylesheet";

export const AddressSearch = ({visible = false, onClose, onSelect}) => {

    return (
        <Modal 
            transparent = {true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
            <Postcode
                style={{width : "100%", height : "80%"}}
                jsOptions={{animation : true, hideMapBtn : true}}
                onSelected={(data) => {
                    onSelect(data);
                    onClose();
                }}
            />
            </View>
        </Modal>
    )
}

const styles = EStyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "$White02",
    }
});