/*import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Mapa del Campus" />
            <View style={styles.content}>
                <Text style={styles.title}>Aquí se mostrará el mapa del campus</Text>
                {/!* Aquí iría el componente del mapa *!/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default MapScreen;*/
// MapScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
    const [region, setRegion] = useState({
        latitude: -12.04318, // Coordenadas de la Universidad
        longitude: -77.02824,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [currentPosition, setCurrentPosition] = useState(null);

    const hasLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            return true;
        }

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Permission',
                message: 'This app needs access to your location to show your position on the map.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    };

    const getLocation = async () => {
        const hasPermission = await hasLocationPermission();
        if (!hasPermission) {
            return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.log(error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
            },
        );
    };

    useEffect(() => {
        getLocation().then(r => r);
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={(region) => setRegion(region)}
            >
                <Marker coordinate={{ latitude: -12.04318, longitude: -77.02824 }} title="Universidad Nacional José Faustino Sánchez Carrión" />
                {currentPosition && (
                    <Marker coordinate={currentPosition} title="Tu ubicación actual" pinColor="blue" />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;
