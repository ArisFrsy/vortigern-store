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

const Transaction: React.FC = () => {
    const [value, setValue] = useState('')
    const [active, setActive] = useState<Number>(1)
    const [modalVisible, setModalVisible] = useState(false);

    const updateActive = () => {
        if (active === 1) {
            setActive(2)
        } else {
            setActive(1)
        }
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        setModalVisible(true);
    }, [])


    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.defaultColor}
            nestedScrollEnabled={true}
        >
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.headerText}>Track your order right now</Text>
                </View>
                <View style={styles.containerRadio}>
                    <TouchableOpacity
                        style={active !== 1 ? styles.radio : [styles.radio, { backgroundColor: 'rgba(161,171,205,0.7)' }]}
                        onPress={() => updateActive()}
                    >
                        <Text style={styles.textRadio}>Track using invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={active !== 2 ? styles.radio : [styles.radio, { backgroundColor: 'rgba(161,171,205,0.7)' }]}
                        onPress={() => updateActive()}
                    >
                        <Text style={styles.textRadio}>Track using number phone</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={[styles.input]}
                        placeholder={active === 1 ? "Insert your invoice" : "Insert your number phone"}
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                </View>
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.textModal}>Sorry, this fitur is curenrtly unavailable</Text>
                            <Button
                                title="Close"
                                onPress={toggleModal}
                                color='#2B3558' // Change the color to your desired color
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    defaultColor: {
        backgroundColor: "#1E253E",
        decelerationRate: "fast",
    },
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    headerText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    containerHeader: {
        marginTop: 10,
        paddingBottom: 5,
        marginBottom: 10,
    },
    containerRadio: {
        backgroundColor: 'rgba(161,171,205,0.3)',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    radio: {
        // backgroundColor: 'rgba(161,171,205,0.7)',
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
    },
    textRadio: {
        color: 'white',
        fontSize: 15,
    },
    input: {
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#1E253E',
        borderRadius: 10,
        padding: 20,
    },
    textModal: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    buttonModal: {
        backgroundColor: '#2B3558',
        width: 200,
    }
})

export default Transaction