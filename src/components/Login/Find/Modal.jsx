import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export const FindIdModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.checkBtn}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>abc님의 이메일은
            abc@naver.com 입니다.</Text>
            <Pressable
              style={styles.modalCheckBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>확인</Text>
            </Pressable>
          </View>
      </Modal>
      <Pressable
        style={styles.checkBtnText}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>확인</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    checkBtn:{
        width:"100%",
        backgroundColor:"#032661",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        bottom: -200,
        borderRadius:10
    },

    checkBtnText:{
        color:"#fff",
    },

    modalCheckBtn:{
        backgroundColor: '#fff',
        color: "#000",
        width:"100%",
        textAlign:"center",
        alignItems:"center",
    },
  
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
  },
});
