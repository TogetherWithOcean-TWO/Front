//위치 등록 화면
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { BackBar } from '../../components/common/CustomBar';
import { MainTitle } from "../../components/common/CustomText";
import LocationRegistration from '../../components/Walking/Location/LocationRegistration';
import EStyleSheet from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { WideButton } from "../../components/common/CustomButton";
import { ConfirmationModal } from '../../components/common/Modal';

const LocationRegistrationScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleConfirm = () =>{
        setIsModalVisible(true);
    }

    const handleCloseModal = ()=>{
        setIsModalVisible(false);
        navigation.navigate('HomeScreen');
    }

    const iconColor = EStyleSheet.value('$Blue01');
    return (
        <View style={styles.container}>
            <BackBar navigation={navigation} />
            <View style={styles.titleContainer}>
                <MainTitle text="위치 등록" style={styles.title} />
                <Icon name="location-outline" size={30} color={iconColor} style={styles.icon} />
            </View>
            <LocationRegistration />
            <View style={styles.button}>
                <WideButton text="확인" onPress={handleConfirm}/>
            </View>

            <ConfirmationModal
                visible={isModalVisible}
                onClose={handleCloseModal}
                message={"등록이 완료되었습니다.\n 멋져요~"}
                buttonText="확인"
            />
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$White01',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        bottom: 20,
        padding: 20,
        justifyContent: "flex-end",
      },

});

export default LocationRegistrationScreen;
