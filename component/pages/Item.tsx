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

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { BarPropTypes } from 'react-native-progress';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';

interface MenuItem {
    id: Int32;
    image: any;
    name: string;
    value?: string;
    nominal: Int32;
}

const Item: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);

    const calculateImageWidth = () => {
        return Dimensions.get('window').width;
    };

    const [imageWidth, setImageWidth] = useState(calculateImageWidth());

    useEffect(() => {
        const updateImageWidth = () => {
            setImageWidth(calculateImageWidth());
        };

        const dimension = Dimensions.addEventListener('change', updateImageWidth);

        return () => {
            dimension.remove();
        };
    }, []);

    const calculateImageHeight = () => {
        return Dimensions.get('window').height;
    };

    const [imageHeight, setImageHeight] = useState(calculateImageHeight());

    useEffect(() => {
        const updateImageWidth = () => {
            setImageHeight(calculateImageHeight());
        };

        const dimension = Dimensions.addEventListener('change', updateImageWidth);

        return () => {
            dimension.remove();
        };
    }, []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Asia', value: 'Asia' },
        { label: 'Amerika', value: 'Amerika' },
        { label: 'Europa', value: 'Europa' },
        { label: 'TW_HK_MO', value: 'TW_HK_MO' }
    ]);

    useEffect(() => {
        DropDownPicker.setListMode("SCROLLVIEW");
    }, []);

    const [uid, setUid] = useState('')

    const [item, setItem] = useState<MenuItem[]>([]);
    const [rows, setRows] = useState<MenuItem[][]>([]);
    const [idItem, setIdItem] = useState<number>(0);
    const [harga, setHarga] = useState<number>(0);
    const [idPayment, setIdPayment] = useState<number>(0);


    const menuItems: MenuItem[] = [
        { id: 1, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '60', nominal: 16500 },
        { id: 2, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '300 + 30', nominal: 81000 },
        { id: 3, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '980 + 110', nominal: 255000 },
        { id: 4, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '1980 + 220', nominal: 489000 },
        { id: 5, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '3280 + 600', nominal: 815000 },
        { id: 6, image: require('../asset/img/item.webp'), name: 'Genesis Crystall', value: '6480 + 1600', nominal: 1629000 },
        { id: 7, image: require('../asset/img/item2.webp'), name: 'Blessing of the Welkin Moon', value: '', nominal: 90000 },
        // Add more menu items as needed
    ];

    useEffect(() => {
        setItem(menuItems);
    }, [])


    useEffect(() => {
        const columns = 2;
        const numRows = Math.ceil(item.length / columns);
        const rows = Array.from({ length: numRows }, (_, index) =>
            item.slice(index * columns, (index + 1) * columns)
        );
        setRows(rows);
    }, [item]);

    const selectItem = (id: Int32, nominal: Int32) => {
        if (idItem === id) {
            setIdItem(0);
            setHarga(0)
        } else {
            setIdItem(id);
            setHarga(nominal);
        }
    }

    const selectPayment = (id: Int32) => {
        if (idPayment === id) {
            setIdPayment(0);
        } else {
            setIdPayment(id);
        }
    }

    const renderMenuItem = ({ item }: { item: MenuItem }) => (
        <View style={styles.buttonHeader}>
            <TouchableOpacity
                // style={styles.button}
                style={idItem !== item.id ? styles.button : [styles.button, { backgroundColor: 'skyblue' }]}
                onPress={() => selectItem(item.id, item.nominal)}
            >
                <View style={styles.imageIconView}>
                    <Image
                        source={item.image}
                        style={styles.imageIcon}
                    />
                </View>
                <Text style={styles.buttonText}>{item.value}</Text>
                <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderGridRow = (rowItems: MenuItem[], rowIndex: number) => (
        <View key={rowIndex} style={styles.gridRow}>
            {rowItems.map((item, index) => (
                <React.Fragment key={index}>{renderMenuItem({ item })}</React.Fragment>
            ))}
        </View>
    );

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
            <View>
                <ImageBackground
                    source={require('../asset/img/slider1.jpeg')}
                    style={[styles.images, { width: imageWidth }]}
                >
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.75)', 'rgba(0, 0, 0, 0.8)', '#1E253E']}
                        style={styles.gradient}
                    />
                </ImageBackground>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textImage}>Genshin Impact</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>To make a purchase, you can enter your uid and choose which server you play on.</Text>
                    </View>
                    <View style={styles.purchaseContainer}>
                        <Text style={styles.purschaseText}> UID</Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Enter Your UID"
                            value={uid}
                            onChangeText={text => setUid(text)}
                        />
                        <Text style={styles.purschaseText}> Select Server</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder={'Select Server'}
                            style={styles.dropDownPicker}
                        />
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.purschaseText}> Select Item</Text>
                        <View>
                            {rows.map(renderGridRow)}
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.purschaseText}> Select Payment Method</Text>
                        <TouchableOpacity
                            style={idPayment !== 1 ? styles.containerPayment : [styles.containerPayment, { backgroundColor: 'skyblue' }]}
                            onPress={() => selectPayment(1)}

                        >
                            <Image
                                source={require('../asset/img/gopay.png')}
                                style={styles.imagePayment}
                            />
                            <View style={styles.containerTextPayment}>
                                {harga > 0 && (
                                    <>
                                        <Text style={styles.buttonText}> Harga </Text>
                                        <Text style={styles.buttonText}> Rp. {harga} </Text>
                                    </>
                                )}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={idPayment !== 2 ? styles.containerPayment : [styles.containerPayment, { backgroundColor: 'skyblue' }]}
                            onPress={() => selectPayment(2)}
                        >
                            <Image
                                source={require('../asset/img/ovo.png')}
                                style={styles.imagePayment}
                            />
                            <View style={styles.containerTextPayment}>
                                {harga > 0 && (
                                    <>
                                        <Text style={styles.buttonText}> Harga </Text>
                                        <Text style={styles.buttonText}> Rp. {harga} </Text>
                                    </>
                                )}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={idPayment !== 3 ? styles.containerPayment : [styles.containerPayment, { backgroundColor: 'skyblue' }]}
                            onPress={() => selectPayment(3)}
                        >
                            <Image
                                source={require('../asset/img/bank.png')}
                                style={styles.imagePayment}
                            />
                            <View style={styles.containerTextPayment}>
                                {harga > 0 && (
                                    <>
                                        <Text style={styles.buttonText}> Harga </Text>
                                        <Text style={styles.buttonText}> Rp. {harga} </Text>
                                    </>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity
                            style={styles.containerBuy}
                            onPress={() => handlePress()}
                        >
                            <Icon name="shop" size={30} color={'#ff7337'} />
                            <Text style={styles.textBuy}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal visible={showNotification} transparent>
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationText}>Sorry, the service is curenly unavailable</Text>
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
        marginLeft: 20,
        flexDirection: 'column',
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        // elevation: 5,
    },
    images: {
        height: 200,
        overflow: 'hidden',
    },
    textImage: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    textContainer: {
        // padding: 10,
    },
    subContainer: {
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
    purchaseContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 20,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 20,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: -5,
        marginBottom: 10,
    },
    purschaseText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    saveArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropDownPicker: {
        // zIndex: 1000, // Adjust the value as needed
        // position: 'relative',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 20,
        borderColor: 'black',
    },
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 0.5,
    },
    imageIcon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        position: 'relative',
    },
    imageIconView: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    category: {
        flexDirection: 'row',
    },
    menuItem: {
        flexDirection: 'column',
        alignItems: 'center',
        // marginBottom: 10,
        marginTop: 20,
        marginRight: 20,
        flex: 2,
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    touchableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Additional styles for the touchable container
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginBottom: 10,
    },
    containerPayment: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 10,
    },
    imagePayment: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    containerTextPayment: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
        justifyContent: 'space-evenly',
        position: 'relative',
        flex: 1,
        marginRight: 10,
    },
    containerBuy: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    textBuy: {
        paddingLeft: 10,
        color: '#ff7337',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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

export default Item