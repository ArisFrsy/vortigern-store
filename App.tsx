import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './component/Header';
import Menu from './component/pages/Menu';
import SplashScreen from './component/SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './component/Navigator/BottomTabNavigator';


function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme();


  useEffect(() => {
    // Simulate an asynchronous task, e.g., fetching data or performing initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the duration you want the splash screen to be displayed
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#1E253E' : '#1E253E' }]}>
      <StatusBar />
      <Header />
      <NavigationContainer
      >
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultColor: {
    backgroundColor: "#1E253E",
  },
});

export default App;
