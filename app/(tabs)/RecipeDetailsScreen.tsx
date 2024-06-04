import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/types';
import { useLocalSearchParams } from 'expo-router';

const RecipeDetailsScreen = () => {
    const { recipe } = useLocalSearchParams() as { recipe: string };
    const parsedRecipe: Recipe = JSON.parse(recipe);

    const addToFavorites = async () => {
        try {
            let favorites: Recipe[] = JSON.parse(await AsyncStorage.getItem('favorites') || '[]');
            favorites.push(parsedRecipe);
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{parsedRecipe.strMeal}</Text>
            <Text>{parsedRecipe.strInstructions}</Text>
            <Button title="Add to Favorites" onPress={addToFavorites} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default RecipeDetailsScreen;









