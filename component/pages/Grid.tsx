import React from 'react';
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
    FlatList
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const Grid: React.FC = () => {
    const [items, setItems] = React.useState([
        { image: require('../asset/img/icon1.webp'), name: 'Home' },
        { image: require('../asset/img/icon2.png'), name: 'Favorites' },
        { image: require('../asset/img/icon1.webp'), name: 'Settings' },
        // Add more menu items as needed
    ]);

    return (
        <View style={styles.header}>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1E253E',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 5, height: 2 },
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    container: {
        marginLeft: 20,
    },
})

export default Grid