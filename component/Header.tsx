import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <View>
                <Image source={require('./asset/img/logo_fgo.png')} style={styles.logo} />
            </View>
            <View>
                <Text style={styles.title}>VORTIGERN</Text>
                <Text style={styles.subtitle}>Gaming Store</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2B3558',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 5, height: 2 },
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
    },
    logo: {
        width: 70,
        height: 70,
    }
});

export default Header;
