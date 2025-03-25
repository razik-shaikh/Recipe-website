import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import saveRecipeReducerStore from "./saveRecipeSlice";

const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        saveRecipe: saveRecipeReducerStore,
    },
});
export default store;