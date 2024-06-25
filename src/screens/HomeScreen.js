import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenidos a la universidad</Text>
            <Image
                source={require('../images/unjfsc.png')} // Asegúrate de usar la ruta correcta a tu imagen
                style={styles.image}
                resizeMode="contain"
            />
            <View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Buscar Salones"
                        color="#004672"
                        onPress={() => navigation.navigate('Search')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Ver Mapa"
                        color="#004672"
                        onPress={() => navigation.navigate('Map')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 10,
        width: '80%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#004672',
    },
    image: {
        width: '80%', // Ajusta el ancho de la imagen según sea necesario
        height: 200, // Ajusta la altura de la imagen según sea necesario
        marginBottom: 20, // Añade un margen inferior si quieres espacio entre la imagen y los botones
    },
});

export default HomeScreen;
