import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const LocationMap = ({ region, setRegion, setAddress }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert("위치에 대한 액세스 권한이 거부되었습니다.");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        })();
    }, []);

    const handleMarkerDrag = async (coordinate) => {
        const distance = getDistance(
            { latitude: location.coords.latitude, longitude: location.coords.longitude },
            { latitude: coordinate.latitude, longitude: coordinate.longitude }
        );

        if (distance <= 5) { // 5 km 단위
            setRegion({
                ...region,
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
            });

            const address = await Location.reverseGeocodeAsync(coordinate);
            setAddress(address[0].street + " " + address[0].name);
        } else {
            Alert.alert("Error", "반경 5km 이내의 위치만 선택할 수 있습니다.");
        }
    };

    const getDistance = (start, end) => {
        const radlat1 = Math.PI * start.latitude / 180;
        const radlat2 = Math.PI * end.latitude / 180;
        const theta = start.longitude - end.longitude;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344; // km로 변환
        return dist;
    };

    return (
        <View style={styles.mapContainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}
                onRegionChangeComplete={(region) => setRegion(region)}
            >
                {region && (
                    <Marker
                        coordinate={{
                            latitude: region.latitude,
                            longitude: region.longitude
                        }}
                        draggable
                        onDragEnd={(e) => handleMarkerDrag(e.nativeEvent.coordinate)}
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        width: '90%',
        height: '70%',
        marginHorizontal: '5%', 
        marginTop: 15,
        borderRadius: 15, 
        overflow: 'hidden', // 테두리 둥글게 적용 -> 내용 숨기기
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default LocationMap;
