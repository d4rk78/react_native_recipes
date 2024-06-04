import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './app/_layout';

export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}
