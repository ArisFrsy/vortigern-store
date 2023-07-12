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

type SectionProps = PropsWithChildren<{
    //   title: string;
}>;

interface MenuItem {
    id: Int32;
    image: any;
    name: string;
    top?: boolean;
    new?: boolean;
    inGames?: boolean;
    flashSale?: boolean;
}

const Menu: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [keywords, setKeywords] = useState('');
    const [item, setItem] = useState<MenuItem[]>([]);
    const [rows, setRows] = useState<MenuItem[][]>([]);

    const [topGames, setTopGames] = useState(false)
    const [newGames, setNewGames] = useState(false)
    const [inGames, setInGames] = useState(false)
    const [flashSale, setFlashSale] = useState(false)

    const topGame = () => {
        if (topGames === false) {
            setTopGames(true)
            setNewGames(false)
            setInGames(false)
            setFlashSale(false)
        } else {
            setTopGames(false)
        }
    }

    const newGame = () => {
        if (newGames === false) {
            setNewGames(true)
            setTopGames(false)
            setInGames(false)
            setFlashSale(false)
        } else {
            setNewGames(false)
        }
    }

    const inGame = () => {
        if (inGames === false) {
            setInGames(true)
            setTopGames(false)
            setNewGames(false)
            setFlashSale(false)
        } else {
            setInGames(false)
        }
    }

    const flashSales = () => {
        if (flashSale === false) {
            setFlashSale(true)
            setInGames(false)
            setTopGames(false)
            setNewGames(false)
        } else {
            setFlashSale(false)
        }
    }

    const menuItems: MenuItem[] = [
        { id: 1, image: require('../asset/img/icon1.webp'), name: 'Genshin Impact', top: true, new: false, inGames: true, flashSale: true },
        { id: 2, image: require('../asset/img/icon2.png'), name: 'Fate : Grand Order', top: true, new: false, inGames: true, flashSale: true },
        { id: 3, image: require('../asset/img/icon3.webp'), name: 'Honkai : Star Rail', top: true, new: true, inGames: true, flashSale: false },
        { id: 4, image: require('../asset/img/icon4.png'), name: 'Free Fire', top: false, new: false, inGames: false, flashSale: false },
        { id: 5, image: require('../asset/img/icon5.webp'), name: 'Honkai Impact 3dr', top: true, new: false, inGames: true, flashSale: true },
        { id: 6, image: require('../asset/img/icon6.png'), name: 'Mobile Legend', top: true, new: false, inGames: false, flashSale: false },
        { id: 7, image: require('../asset/img/icon7.webp'), name: 'PUBG Mobile', top: true, new: false, inGames: false, flashSale: false },
        { id: 8, image: require('../asset/img/icon8.png'), name: 'FIFA Mobile', top: true, new: false, inGames: false, flashSale: false },
        { id: 9, image: require('../asset/img/icon9.png'), name: 'Punishing Gray Ravens', top: false, new: true, inGames: false, flashSale: false },
        // Add more menu items as needed
    ];

    useEffect(() => {
        if (keywords !== '') {
            const filteredItems = menuItems.filter(item =>
                item.name.toLowerCase().includes(keywords.toLowerCase())
            );
            setItem(filteredItems);
        } else {
            setItem(menuItems);
        }
    }, [keywords]);

    useEffect(() => {
        if (newGames === true) {
            const filteredItems = menuItems.filter(item =>
                item.new
            );
            setItem(filteredItems);
        } else {
            setItem(menuItems);
        }
    }, [newGames]);

    useEffect(() => {
        if (flashSale === true) {
            const filteredItems = menuItems.filter(item =>
                item.flashSale
            );
            setItem(filteredItems);
        } else {
            setItem(menuItems);
        }
    }, [flashSale]);

    useEffect(() => {
        if (inGames === true) {
            const filteredItems = menuItems.filter(item =>
                item.inGames
            );
            setItem(filteredItems);
        } else {
            setItem(menuItems);
        }
    }, [inGames]);

    useEffect(() => {
        if (topGames === true) {
            const filteredItems = menuItems.filter(item =>
                item.top
            );
            setItem(filteredItems);
        } else {
            setItem(menuItems);
        }
    }, [topGames]);


    useEffect(() => {
        const columns = 3;
        const numRows = Math.ceil(item.length / columns);
        const rows = Array.from({ length: numRows }, (_, index) =>
            item.slice(index * columns, (index + 1) * columns)
        );
        setRows(rows);
    }, [item]);

    const handlePress = (id: Int32) => {
        if (id === 1) {
            navigateToBuy();
        } else {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 2000); // Duration in milliseconds (2 seconds)
        }
    };


    const renderMenuItem = ({ item }: { item: MenuItem }) => (
        <View style={styles.menuItem}>
            <ImageBackground source={item.image} style={styles.icon}>
                <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.touchableContainer}>
                    {/* Remove the View and Text components */}
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );

    const renderGridRow = (rowItems: MenuItem[], rowIndex: number) => (
        <View key={rowIndex} style={styles.gridRow}>
            {rowItems.map((item, index) => (
                <React.Fragment key={index}>{renderMenuItem({ item })}</React.Fragment>
            ))}
        </View>
    );

    const navigation = useNavigation();

    const navigateToBuy = () => {
        navigation.navigate("Item" as never, { Id: 1 } as never);
    };

    const calculateImageWidth = () => {
        return Dimensions.get('window').width - 40;
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



    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.defaultColor}
            nestedScrollEnabled={true}
        >
            <View style={styles.header}>
                <View style={styles.container}>
                    <Swiper style={styles.swiper}>
                        <TouchableWithoutFeedback onPress={() => handlePress(1)}>
                            <ImageBackground source={require('../asset/img/slider1.jpeg')} style={[styles.images, { width: imageWidth }]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textImage}>Genshin Impact</Text>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => handlePress(2)}>
                            <ImageBackground source={require('../asset/img/slider2.png')} style={[styles.images, { width: imageWidth }]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textImage}>Fate : Grand Order</Text>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
                    </Swiper>
                    <View>
                        <TextInput
                            style={[styles.input, { width: imageWidth }]}
                            placeholder="Search your games"
                            value={keywords}
                            onChangeText={text => setKeywords(text)}
                        />
                    </View>
                    <ScrollView
                        horizontal
                        style={styles.scrollMenu}>
                        <View style={styles.buttonHeader}>
                            <TouchableOpacity
                                style={topGames === false ? styles.button : [styles.button, { backgroundColor: '#A1ABCD' }]}
                                onPress={() => topGame()}
                            >
                                <Text style={styles.buttonText}>Top Games</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={newGames === false ? styles.button : [styles.button, { backgroundColor: '#A1ABCD' }]}
                                onPress={() => newGame()}
                            >
                                <Text style={styles.buttonText}>New Games</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={inGames === false ? styles.button : [styles.button, { backgroundColor: '#A1ABCD' }]}
                                onPress={() => inGame()}
                            >
                                <Text style={styles.buttonText}>Topup InGames</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={flashSale === false ? styles.button : [styles.button, { backgroundColor: '#A1ABCD' }]}
                                onPress={() => flashSales()}
                            >
                                <Text style={styles.buttonText}>Flash Sale</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View>
                        {rows && rows.length > 0 ? (
                            rows.map(renderGridRow)
                        ) :
                            <Text style={styles.textNotFound}>games not found !!!</Text>
                        }
                    </View>
                </View>
                <Modal visible={showNotification} transparent>
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationText}>Sorry, for now only genshin impact is available</Text>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    defaultColor: {
        backgroundColor: "#1E253E",
    },
    header: {
        backgroundColor: '#1E253E',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 5, height: 2 },
        marginBottom: 20,
    },
    container: {
        marginLeft: 20,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    swiper: {
        marginTop: 15,
        height: 220,
    },
    images: {
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    textImage: {
        fontSize: 24,
        fontFamily: 'bold',
        color: 'black',
    },
    textContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        alignContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#404969',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 20,
    },
    listContent: {
        paddingHorizontal: 10,
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
    titleMenu: {
        fontSize: 12,
        color: 'black',
        flex: 1,
    },
    textContainer2: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        alignContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginBottom: 10,
    },
    scrollMenu: {
        marginRight: 20,
        // justifyContent: 'center',
    },
    textNotFound: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 15,
        textAlign: 'center',
    },
    touchableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Additional styles for the touchable container
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

export default Menu