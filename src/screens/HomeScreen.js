import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Bienvenido a la Universidad" />
            <View style={styles.content}>
                <Button
                    title="Buscar Salones"
                    onPress={() => navigation.navigate('Search')}
                />
                <Button
                    title="Ver Mapa"
                    onPress={() => navigation.navigate('Map')}
                />
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
