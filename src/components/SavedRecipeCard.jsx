import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeSavedRecipeRedux } from '../redux/saveRecipeSlice';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const SavedRecipeCard = ({ item }) => {
    const dispatch = useDispatch();
    function RemoveRecipe() {
        // console.log("recipe removed successfully");

        dispatch(removeSavedRecipeRedux(item));
        toast.success('Recipe removed from saved list.');
   
    }




    return (
        <div className="flex items-center p-3 bg-white shadow-lg rounded-lg mb-4 w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl max-h-24">
            {/* Image of the recipe */}
            <img className="w-20 h-20 object-cover rounded-md" src={item.strMealThumb} alt={item.strMeal} />

            {/* heading */}
            <div className="flex-1 min-w-0 mx-3">
                <NavLink to={`/recipe/${item.idMeal}`}>

                    <h2 className="text-sm sm:text-sm md:text-lg  font-semibold text-gray-800 truncate">{item.strMeal}</h2>
                </NavLink>
            </div>

            {/* Remove button */}
            <div className="flex items-center">


                {/* Remove button for saved recipe */}
                <button
                    onClick={RemoveRecipe}
                    className="inline-flex items-center px-4 py-2 bg-black hover:bg-white-700 text-white text-sm font-medium rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>Remove
                </button>
            </div>
        </div>
    );
};

export default SavedRecipeCard;
