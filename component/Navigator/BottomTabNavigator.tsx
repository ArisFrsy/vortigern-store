import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
import Navigator from './Navigator';
import Maintenance from '../pages/Maintenance';
import Transaction from '../pages/Transaction';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="menu"
            screenOptions={{
                headerShown: false, // Hide the screen names in the top bar
                tabBarLabelStyle: { marginBottom: 5 }, // Optional: Adjust the label position
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#2B3558',
                tabBarInactiveBackgroundColor: '#1E253E',
            }}
        >
            <Tab.Screen
                name="menu"
                component={Navigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Transactions"
                component={Transaction}
                options={{
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="money" size={size} color={color} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='badge' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    defaultColor: {
        backgroundColor: "#1E253E",
        decelerationRate: "fast",
    },
})

export default BottomTabNavigator