import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/types';
import { useRouter } from 'expo-router';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);
    const router = useRouter();

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const favorites = await AsyncStorage.getItem('favorites');
                if (favorites) {
                    setFavorites(JSON.parse(favorites));
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadFavorites();
    }, []);

    const removeFavorite = async (idMeal: string) => {
        try {
            const updatedFavorites = favorites.filter(recipe => recipe.idMeal !== idMeal);
            setFavorites(updatedFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={item => item.idMeal}
                renderItem={({ item }) => (
                    <View style={styles.recipeContainer}>
                        <TouchableOpacity style={styles.recipe} onPress={() => router.push({ pathname: 'RecipeDetailsScreen', params: { recipe: JSON.stringify(item) } })}>
                            <Text>{item.strMeal}</Text>
                        </TouchableOpacity>
                        <Button title="Usuń" onPress={() => removeFavorite(item.idMeal)} />
                    </View>
                )}
            />
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
    },
    recipeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },
    recipe: {
        flex: 1,
    },
});

export default FavoritesScreen;





