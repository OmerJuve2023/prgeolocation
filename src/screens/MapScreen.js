import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Header title="Mapa del Campus" />
            <View style={styles.content}>
                <Text style={styles.title}>Aquí se mostrará el mapa del campus</Text>
                {/* Aquí iría el componente del mapa */}
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

export default MapScreen;
