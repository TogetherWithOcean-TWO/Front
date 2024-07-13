import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapDisplay from '../../components/MyOcean/MapDisplay';
import LocationText from '../../components/MyOcean/LocationText';
import { BackBar } from '../../components/common/CustomBar';
import { MainTitle } from "../../components/common/CustomText";
import { UserLocationProvider } from '../../contexts/UserLocationContext';
import EStyleSheet from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';

const MyOceanScreen = ({ navigation }) => {
    const iconColor = EStyleSheet.value('$Blue01');
    return (
        <UserLocationProvider>
            <BackBar navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <MainTitle text="나의 가치해양" style={styles.title} />
                    <Icon name="map-outline" size={30} color={iconColor} style={styles.icon} />
                </View>
                <LocationText />
                <MapDisplay />
               
            </View>

        </UserLocationProvider>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '$White01',

    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        

    },
    title: {
        marginEnd: 7,
    }

});

export default MyOceanScreen;
