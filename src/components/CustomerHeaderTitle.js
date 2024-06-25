import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeaderTitle = ({ studentName, studentCycle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio</Text>
            <View style={styles.rightContainer}>
                <Text style={styles.subtitle}>{studentName}</Text>
                <Text style={styles.subtitle}>{studentCycle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 10,
    },
});

export default CustomHeaderTitle;
