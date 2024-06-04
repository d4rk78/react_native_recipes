import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Recipe } from '../types/types';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => {
                setRecipes(response.data.meals);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <FlatList
                data={recipes}
                keyExtractor={item => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.recipe} onPress={() => router.push({ pathname: 'RecipeDetailsScreen', params: { recipe: JSON.stringify(item) } })}>
                        <Text>{item.strMeal}</Text>
                    </TouchableOpacity>
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
    recipe: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;

