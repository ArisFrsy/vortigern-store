import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Menu from "../pages/Menu";
import Profile from "../pages/Profile";
import Item from "../pages/Item";

const Navigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Hide the screen names in the top bar // Optional: Adjust the label position
            }}
        >
            <Stack.Screen name="Home" component={Menu} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
    )
}

export default Navigator