export interface Recipe {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
}

export type RootStackParamList = {
    Home: undefined;
    RecipeDetails: { recipe: Recipe };
    SearchScreen: undefined;
    FavoritesScreen: undefined;
};

