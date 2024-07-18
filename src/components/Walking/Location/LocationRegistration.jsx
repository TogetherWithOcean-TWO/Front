import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LocationMap from './LocationMap';
import LocationText from './LocationText';

const LocationRegistration = () => {
    const [region, setRegion] = useState(null);
    const [address, setAddress] = useState("");

    return (
        <View style={styles.container}>
            <LocationMap region={region} setRegion={setRegion} setAddress={setAddress} />
            <LocationText address={address} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LocationRegistration;
