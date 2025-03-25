import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveRecipeRedux, removeSavedRecipeRedux } from '../../redux/saveRecipeSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Header({ detail }) {



    const navigate = useNavigate();
    // console.log(detail);
    const dispatch = useDispatch();
    const savedRecipeFromStore = useSelector(state => state.saveRecipe.savedRecipesListRedux)

    const saved = useMemo(() => {
        return savedRecipeFromStore.some(recipe => recipe.idMeal === detail.idMeal);
    }, [savedRecipeFromStore, detail.idMeal])


    function handlesave() {
        if (saved) {
            // console.log("recipe removed successfully")
            dispatch(removeSavedRecipeRedux(detail));
            toast.success('Recipe removed successfully!');
        } else {

            // console.log(`recipe added successfully`);
            dispatch(saveRecipeRedux(detail))
            toast.success('Recipe saved successfully!');
        }
    }


    return (
        <>

            <div style={{ fontFamily: 'Roboto' }} className="max-w-4xl mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => navigate('/')} className="text-gray-600">
                        <i className="fas fa-arrow-left" /> Back to Recipes
                    </button>
                    <span className="text-gray-600">Recipe ID: {detail.idMeal}</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                    <div className="relative w-full h-[400px]">
                        <img
                            alt="Recipe heading"
                            className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-100"
                            src={detail.strMealThumb || "https://via.placeholder.com/400"}
                            loading='lazy'
                        />
                        <button
                            onClick={handlesave}

                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                            {saved ? (
                                <i className="fas fa-heart text-red-600 text-xl"></i>
                            ) : (
                                <i className="fas fa-heart text-gray-600 text-xl"></i>
                            )}
                        </button>
                    </div>

                    <h1 className="text-2xl font-bold mt-4">{detail.strMeal || "Unknown Recipe"}</h1>
                    <div className="flex items-center mt-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Recipe
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Details
                        </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                        <span className="mr-4">
                            <i className="fas fa-globe"></i>
                            {detail.strArea || "Unknown"}
                        </span>
                        <span className="mr-4">
                            <i className="fas fa-clock"></i>
                            Some mints
                        </span>
                        <span>
                            <i className="fas fa-utensils"></i>
                            {detail.strCategory || "N/A"}
                        </span>
                    </div>
                </div>
            </div>
        </>

    )
}





export default Header
