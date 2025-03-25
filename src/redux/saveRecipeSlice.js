import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedRecipesListRedux: [],
};

const saveRecipeSlice = createSlice({
    name: 'saveRecipe',
    initialState,
    reducers: {
        saveRecipeRedux: (state, action) => {
            state.savedRecipesListRedux.push(action.payload);
        },
        removeSavedRecipeRedux: (state, action) => {
            state.savedRecipesListRedux = state.savedRecipesListRedux.filter(
                recipe => recipe.idMeal !== action.payload.idMeal
            );
        },
    },
});

export const { saveRecipeRedux, removeSavedRecipeRedux } = saveRecipeSlice.actions;

export default saveRecipeSlice.reducer;