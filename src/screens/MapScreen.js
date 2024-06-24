import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mapa del Campus</Text>
            {/* Aquí iría el componente del mapa */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default MapScreen;
