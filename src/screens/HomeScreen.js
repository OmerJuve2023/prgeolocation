import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            getAddressFromCoordinates(location.coords.latitude, location.coords.longitude).then(r => r);
        })();
    }, []);

    const getAddressFromCoordinates = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const address = response.data.display_name;
            setAddress(address);
        } catch (error) {
            Alert.alert("Error", "No se pudo obtener la dirección");
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')}
                style={styles.imageIcon}
                resizeMode="contain"
            />
            <Text style={styles.text}>Bienvenidos a la universidad</Text>
            <Image
                source={require('../images/unjfsc.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.locationText}>{address}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Search')}
                >
                    <Text style={styles.buttonText}>Buscar Salones</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Map')}
                >
                    <Text style={styles.buttonText}>Ver Mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    buttonContainer: {
        margin: 10,
        width: '80%',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#004672',
        fontFamily: 'Custom-Font',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 4,
        textAlign: 'center',
        letterSpacing: 1.2,
    },
    image: {
        width: '100%',
        height: 215,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#004672',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    imageIcon: {
        width: "50%",
        height: 100,
    },
    locationText: {
        fontSize: 18,
        color: '#333',
        marginVertical: 10,
    },
});

export default HomeScreen;
