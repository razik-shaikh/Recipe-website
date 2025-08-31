import { createSlice } from '@reduxjs/toolkit';
// Define the initial state of the recipe
const initialState = {
    recipes: [],
    search: '',
}

// Create a slice
const recipeSlice = createSlice({
    name: 'recipes',  
    initialState,
    reducers: {
        //Define reducers
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },

})
export const { setRecipes, setSearch } = recipeSlice.actions;

export default recipeSlice.reducer;