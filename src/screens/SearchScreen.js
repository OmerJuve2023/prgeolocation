import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';

const SearchScreen = ({ navigation }) => {
    const [course, setCourse] = useState('');

    return (
        <View style={styles.container}>
            <Header title="Buscar Curso" />
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el nombre del curso"
                    value={course}
                    onChangeText={setCourse}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Buscar"
                        color="#004672"
                        onPress={() => {
                            // Aquí iría la lógica de búsqueda
                            navigation.navigate('Map');
                        }}
                    />
                </View>
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
    input: {
        height: 40,
        borderColor: '#004672',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: '100%',
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
    },
});

export default SearchScreen;
