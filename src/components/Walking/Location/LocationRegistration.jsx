import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LocationMap from './LocationMap';
import LocationText from './LocationText';


const LocationRegistration = () => {
    const [region, setRegion] = useState(null);
    const [placeName, setPlaceName] = useState("");

    return (
        <View style={styles.container}>
            <LocationMap region={region} setRegion={setRegion} setPlaceName={setPlaceName} />
            <LocationText placeName={placeName} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LocationRegistration;
