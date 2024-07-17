// 추천 지도.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SubTitle } from '../common/CustomText';
import EStyleSheet from '../../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';

const RecommendationSection = () => {
    const iconColor = EStyleSheet.value('$Blue01');
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <SubTitle text="이번주 추천 지역" />
                <Icon name="location-sharp" size={24} color={iconColor} style={styles.icon} />
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE} // 추가
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.5665, // 원하는 초기 위치의 위도
                        longitude: 126.9780, // 원하는 초기 위치의 경도
                        latitudeDelta: 0.0922, // 확대/축소 정도
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 37.5665, longitude: 126.9780 }} // 마커의 위치
                        title="추천 지역"
                        description="서울특별시"
                    />
                </MapView>
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        //borderWidth: 2, // 테두리 두께
        //borderColor: 'black', // 테두리 색상
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    mapContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 5,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default RecommendationSection;
