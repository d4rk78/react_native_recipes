import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Recipe } from '../types/types';
import { useRouter } from 'expo-router';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const router = useRouter();

    const searchRecipes = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(response => setRecipes(response.data.meals))
            .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for recipes"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Search" onPress={searchRecipes} />
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    recipe: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },
});

export default SearchScreen;




