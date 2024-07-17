import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useUserLocation } from '../../contexts/UserLocationContext';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 36.5; // 중심 좌표의 위도
const LONGITUDE = 127.5; // 중심 좌표의 경도
const LATITUDE_DELTA = 4.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapDisplay = () => {
  const { locations, setSelectedLocation } = useUserLocation();

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // 추가
      style={styles.map}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={location.title}
          onPress={() => setSelectedLocation(location.title)}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginHorizontal: 20,  //전체 꽉 차게 할꺼면 지우기
    borderRadius: 20,
    //marginVertical: 20,
    marginBottom : 20,
    

  },
});

export default MapDisplay;
