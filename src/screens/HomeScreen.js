import React from 'react';
import {View, Button, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
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
        fontSize: 26, // Tamaño del texto más grande
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#004672',
        fontFamily: 'Custom-Font', // Aplica la fuente personalizada
        textShadowColor: 'rgba(0, 0, 0, 0.25)', // Sombra del texto
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 4,
        textAlign: 'center', // Centra el texto
        letterSpacing: 1.2, //
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
        borderRadius: 25, // Bordes redondeados
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra en Android
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
});

export default HomeScreen;
