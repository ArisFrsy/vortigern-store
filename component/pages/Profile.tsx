import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    FlatList,
    Button,
    PanResponder,
    Alert,
    Modal,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';

const Profile: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handlePress = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000); // Duration in milliseconds (2 seconds)
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.defaultColor}
            nestedScrollEnabled={true}
        >
            <View style={styles.container}>
                <View style={styles.userContainer}>
                    <Image
                        source={require('../asset/img/icon3.png')}
                        style={styles.image}
                    />
                    <View style={styles.textUserContainer}>
                        <Text style={styles.textLogin}> You need login frist</Text>
                        <TouchableOpacity
                            style={styles.containerButtonLogin}
                            onPress={() => handlePress()}
                        >
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerSetting}>
                    <TouchableOpacity
                        style={styles.touchableSetting}
                        onPress={() => handlePress()}
                    >
                        <Icon name="settings" size={35} color={'rgba(161,171,205,0.7)'} />
                        <Text style={styles.textSetting}> Setting</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerSetting}>
                    <TouchableOpacity
                        style={styles.touchableSetting}
                        onPress={() => handlePress()}
                    >
                        <Icon name="info" size={35} color={'rgba(161,171,205,0.7)'} />
                        <Text style={styles.textSetting}> About Us</Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={showNotification} transparent>
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationText}>Sorry, this fitur is under maintenance</Text>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    defaultColor: {
        backgroundColor: "#1E253E",
        decelerationRate: "fast",
    },
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    userContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(161,171,205,0.7)',
    },
    textUserContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
    },
    containerButtonLogin: {
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: "#1E253E",
        width: 65,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 10,
    },
    textLogin: {
        color: 'white',
        fontSize: 17,
    },
    containerSetting: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(161,171,205,0.7)',
    },
    textSetting: {
        color: 'white',
        fontSize: 17,
        marginLeft: 15,
    },
    touchableSetting: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    notificationContainer: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 20,
        opacity: 0.9,
    },
    notificationText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
})


export default Profile