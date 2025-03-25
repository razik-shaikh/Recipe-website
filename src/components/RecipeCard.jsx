import { useState, useMemo } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveRecipeRedux, removeSavedRecipeRedux } from '../redux/saveRecipeSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function RecipeCard({ detail }) {

    const dispatch = useDispatch();
    const savedRecipeFromStore = useSelector(state => state.saveRecipe.savedRecipesListRedux)

    //Check if the recipe is already saved by matching the recipe ID
    const saved = useMemo(() => {
        return savedRecipeFromStore.some(recipe => recipe.idMeal === detail.idMeal);

    }, [savedRecipeFromStore, detail.idMeal])







    function handlesave() {
        if (saved) {

            // console.log('Removing recipe from saved list');
            dispatch(removeSavedRecipeRedux(detail)); // Remove from Redux state

            toast.success('Recipe removed successfully!');

        } else {

            // console.log('Saving recipe to saved list');
            dispatch(saveRecipeRedux(detail)); // Add to Redux state
            toast.success(' Recipe saved successfully!');

        }

    }

    return (
        <>

            
            {/* Recipe card */}
            <div className="card-container">
                <div className="card max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                        className="w-full h-64 object-cover"
                        src={detail.strMealThumb || "https://via.placeholder.com/300"}
                        alt="Card Image"
                        loading='lazy' 
                    />
                    <div className="px-6 py-2">
                        <h2 className="font-serif font-semibold text-2xl text-gray-800 ">{detail.strMeal}</h2>
                    </div>
                    <div className="px-6 py-3 flex justify-between items-center">
                        <NavLink to={`/recipe/${detail.idMeal}`}>

                            <button

                                className="text-white bg-black px-3 py-1
                                font-semibold rounded-3xl hover:bg-black transition-colors duration-200">
                                Get Recipe
                            </button>
                        </NavLink>
                        <button
                            onClick={handlesave}
                            className='save-button'>
                            {
                                saved ? (<FaBookmark size={28} />) : (<FaRegBookmark size={28} />)
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RecipeCard

