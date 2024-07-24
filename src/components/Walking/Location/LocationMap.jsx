import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '@env';

/*앱 화면이 켜지는 순간 사용자의 현재 위치가 찍힙니다.
지도를 드래그할 때 마커가 움직이지 않습니다.
제한된 반경 내에서만 POI를 선택할 수 있습니다.
제한된 반경 내에서 POI를 누르면 해당 장소명이 텍스트로 표시됩니다.
제한된 반경 내에서 POI가 아닌 위치를 누르면 "알 수 없음"이라는 텍스트가 표시됩니다.
제한된 반경 외의 위치를 누르면 "반경 내에서 장소를 선택해주세요"라는 경고 메시지가 표시됩니다.*/

const LocationMap = ({ region, setRegion, setPlaceName }) => {
  const [location, setLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("위치에 대한 액세스 권한이 거부되었습니다.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const initialRegin = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      };
      setInitialRegion(initialRegin);
      setRegion(initialRegin);

      // 초기 위치에 대한 장소명 설정
      const placeName = await getPlaceName(location.coords.latitude, location.coords.longitude);
      setPlaceName(placeName);
    })();
  }, []);

  const handleMapPress = async (e) => {
    const coordinate = e.nativeEvent.coordinate;
    const distance = getDistance(
      { latitude: location.coords.latitude, longitude: location.coords.longitude },
      { latitude: coordinate.latitude, longitude: coordinate.longitude }
    );

    if (distance <= 1) { // km 단위
      setRegion({
        ...region,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
      
      //반경 내에서 poi가 아닌 곳을 누르면 "알 수 없음이 뜬다"
      setPlaceName("장소명을 알 수 없음");
    } else {
      Alert.alert("Error", "반경 1km 이내의 위치를 수정할 수 있습니다");
    }
  };

  //POI 클릭 이벤트 핸들러
  const handlePoiClick = async(e) => {
    const placeId = e.nativeEvent.placeId;
    const coordinate = e.nativeEvent.coordinate;

    const distance = getDistance(
        { latitude: location.coords.latitude, longitude: location.coords.longitude },
        { latitude: coordinate.latitude, longitude: coordinate.longitude }
    );

    if(distance <= 1){
        setRegion({
            ...region,
            latitude:coordinate.latitude,
            longitude : coordinate.longitude,
        });

        const placeName = await getPlaceDetails(placeId);
        setPlaceName(placeName);
    }else{
        Alert.alert("error", "1km 반경 내에서 장소를 선택해주세요.");
    }

  };

  // 해당 위치의 장소 가져오기
  const getPlaceName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      console.log(response.data);  // Debugging line
      if (response.data.results.length > 0) {
        const placeId = response.data.results[0].place_id;
        return await getPlaceDetails(placeId);
      }
      return "알 수 없는 장소";
    } catch (error) {
      console.log("Error fetching place name: ", error);  // Debugging line
      return "알 수 없는 장소";
    }
  };

  // place_id로 장소명 가져오기
  const getPlaceDetails = async (placeId) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
      );
      console.log(response.data);  // Debugging line
      if (response.data.result) {
        return response.data.result.name;
      }
      return "알 수 없는 장소";
    } catch (error) {
      console.log("Error fetching place details: ", error);  // Debugging line
      return "알 수 없는 장소";
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

  if (!initialRegion) {
    return null; // 로딩 중일 때 빈 화면을 반환하거나 로딩 스피너를 표시할 수 있습니다.
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}
        onPress={handleMapPress}
        onPoiClick={handlePoiClick}
      >
        {/*마커 지울려면 여기 지우면 됨 */}
        {region && (
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
          />
        )}
        {/*반경 시각적으로 표현해줌 */}
        {location && (
            <Circle
                center={{
                    latitude : location.coords.latitude,
                    longitude : location.coords.longitude
                }}
                radius={1000} //1km 반경
                strokeColor='rgba(0, 150, 255, 0.5)'
                fillColor='rgba(0, 150, 255, 0.2)'
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
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default LocationMap;
