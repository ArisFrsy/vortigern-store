import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';

const SplashScreen: React.FC = () => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../asset/img/logo_fgo.png')} style={styles.logo} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>VORTIGERN</Text>
                    <Text style={styles.subtitle}>Gaming Store</Text>
                </View>
            </View>
            <View style={styles.loadingContainer}>
                <Progress.Bar
                    progress={0}
                    width={200}
                    height={10}
                    animated={true}
                    indeterminateAnimationDuration={1000}
                    indeterminate={true}
                    color={'white'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E253E',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
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
    logoContainer: {
        width: 100,
        height: 100,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0.5 },
        shadowRadius: 2,
    },
    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    textContainer: {
        // marginLeft: 10,
    },
    loadingContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    }
});

export default SplashScreen;
