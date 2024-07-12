import React, { useState } from "react";
import { TouchableOpacity, View, Alert, Image} from "react-native";
import EStyleSheet from "../../styles/global";
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { InfoText } from "../../components/common/CustomText";
import { SelectModal } from "../common/Modal";
import * as ImagePicker from "expo-image-picker"

export const PhotoSubmitForm = ({camera, onPhotoSelected, uri=null}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };

      const openCamera = () => {
        camera();
        closeModal();
      }

      const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('사진 접근 권한이 필요합니다');
          return;
        }
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                aspect : [3,4], //ios에서는 적용x
                quality : 1
            });

            if(!result.canceled){
                onPhotoSelected(result.assets[0].uri);
                closeModal();
            }
        } catch (error) {
            console.log("이미지 라이브러리에서 사진을 가져오는 중 오류 발생:", error);
            Alert.alert("사진을 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return(
        <View style={{flex : 1}}>
            <TouchableOpacity onPress={openModal}>
                {uri ? (
                    <Image source={{uri}} style={styles.photo} resizeMode="cover"/>
                ) : (
                    <View style={styles.photoSubmitForm}>
                        <Icon 
                            name="add-outline"
                            size={32}
                            style = {styles.icon}
                        />
                        <InfoText text="추가하기"/>
                    </View>
                )
            }
                
                </TouchableOpacity>
                <SelectModal
                    visible={modalVisible}
                    onClose={closeModal}
                    selectItem1="앨범에서 가져오기"
                    selectItem2="사진촬영하기"
                    selectBehavior1={pickImage}
                    selectBehavior2={openCamera}
                    buttonText="닫기"
                />
            </View>
    );
}

const styles = EStyleSheet.create({
    photoSubmitForm : {
        backgroundColor: "$Blue02",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical : 15,
        height : "80%",
        marginVertical : 30
    }, 
    icon : {
        color : "$Blue01",
        padding : 5
    },

     photo : {
         alignItems: "center",
         justifyContent: "center",
         borderRadius: 10,
         paddingVertical : 15,
         height : "80%",
         marginVertical : 30,
     }, 
});