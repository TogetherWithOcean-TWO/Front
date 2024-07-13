import React, { createContext, useContext, useState } from 'react';
//추후 api 관련하여 작성하기
const UserLocationContext = createContext();

const locations = [
  { id: 1, latitude: 37.5665, longitude: 126.9780, title: '서울' },
  { id: 2, latitude: 35.1796, longitude: 129.0756, title: '부산' },
  { id: 3, latitude: 35.155, longitude: 126.835, title: '광주' },
  { id: 4, latitude: 37.4483, longitude: 129.1658, title: '삼척해수욕장' },
  // 추가 위치를 여기에 추가
];

export const UserLocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[3].title); // 초기값을 삼척해수욕장으로 설정

  return (
    <UserLocationContext.Provider value={{ locations, selectedLocation, setSelectedLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export const useUserLocation = () => useContext(UserLocationContext);


/**
 * import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // API 호출을 위해 axios를 사용

const UserLocationContext = createContext();

export const UserLocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // API를 통해 위치 데이터를 가져오기.
    const fetchLocations = async () => {
      try {
        const response = await axios.get('https://api.example.com/locations');
        setLocations(response.data);
        if (response.data.length > 0) {
          setSelectedLocation(response.data[0].title); // 초기 선택 위치 설정
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <UserLocationContext.Provider value={{ locations, selectedLocation, setSelectedLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export const useUserLocation = () => useContext(UserLocationContext);

 */
