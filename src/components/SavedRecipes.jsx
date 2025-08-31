import React from 'react';
import { useSelector } from 'react-redux';
import SavedRecipeCard from './SavedRecipeCard'; // Import ShoppingCartCard to display each saved recipe

function SavedRecipes() {
  // Get saved recipes from the Redux store
  const savedRecipes = useSelector((state) => state.saveRecipe.savedRecipesListRedux);

  return (
    <>
   
      {/* Check if there are saved recipes */}
      {savedRecipes.length === 0 ? (
        <p className="text-center text-lg text-gray-500">You have no saved recipes yet.</p>
      ) : (
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-center mb-6">Saved Recipes</h1>
          <div className=" justify-center ">
            {savedRecipes.map(item => (
              <SavedRecipeCard key={item.idMeal} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SavedRecipes;
