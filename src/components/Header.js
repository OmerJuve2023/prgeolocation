import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const Header = ({title}) => {
    return (
        <View
            style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: '#f7287b',
    },
    headerAndroid: {
        backgroundColor: '#004672',
    },
    headerTitle: {
        color: '#004672',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;
