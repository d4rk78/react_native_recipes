import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#828282',
                tabBarStyle: { backgroundColor: '#f8f8f8' },
            }}
        >
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    tabBarLabel: 'Strona główna',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="FavoritesScreen"
                options={{
                    tabBarLabel: 'Ulubione',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="RecipeDetailsScreen"
                options={{
                    tabBarLabel: 'Szczegóły',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="food" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="SearchScreen"
                options={{
                    tabBarLabel: 'Szukaj',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}

export default TabLayout;

