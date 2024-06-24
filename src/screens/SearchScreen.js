import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [course, setCourse] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Curso</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre del curso"
                value={course}
                onChangeText={setCourse}
            />
            <Button
                title="Buscar"
                onPress={() => {
                    // Aquí iría la lógica de búsqueda
                    navigation.navigate('Map');
                }}
            />
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: '80%',
    },
});

export default SearchScreen;
