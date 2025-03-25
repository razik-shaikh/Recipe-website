import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, setSearch } from '../redux/recipeSlice';
import { NavLink } from 'react-router-dom';
import { FaBookmark, FaSearch } from 'react-icons/fa';
import RecipeCard from './RecipeCard';
import NotFound from '../pages/RecipeNotFound';
import '../App.css';
import axios from 'axios';

const FeaturedRecipe = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [error, setError] = useState(null);
    // For scroll
    const scrollRef = useRef(null);



    const dispatch = useDispatch();
    const { recipes, search } = useSelector(state => state.recipes);
    const savedRecipes = useSelector((state) => state.saveRecipe.savedRecipesListRedux); // Access saved recipes from Redux store

    async function fetchData(event, query = "") {
        event.preventDefault();
        //for empty search
        if (!query.trim()) {
            setError("Please enter a search term!");
            return;
        }

        let apiUrl = "";
        if (query) {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        } else {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
        }

        try {
            setError(null);
            const { data } = await axios.get(apiUrl);
            if (data.meals) {
                dispatch(setRecipes(data.meals));
            // let response = await fetch(apiUrl);
            // if (!response.ok) {
            //     throw new Error("Something went wrong");
            // }
            // const jsonData = await response.json();
            } else {
                dispatch(setRecipes([]));
            }
            setIsSearch(true);
        } catch (error) {
            setError(error.message); // Show error message in UI
            console.log(`Oops Something went wrong : ${error}`);
        }
    }

    function handleInputChange(event) {
        dispatch(setSearch(event.target.value));
    }

    useEffect(() => {
        if (recipes.length > 0 || isSearch) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [recipes, isSearch]);

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                        alt="Featured Recipe"
                        className="object-cover w-full h-full"
                        loading='lazy'
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative container mx-auto flex flex-col items-center px-4">

                    <div className="max-w-2xl text-cream animate-fadeIn mt-8 md:mt-4">
                        <NavLink to={`/SavedRecipes`}>
                            <button className="flex px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold mb-4">
                                <FaBookmark size={18} /> {savedRecipes.length} Recipes Saved
                            </button>
                        </NavLink>

                        <h1 className=" font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-center text-gray-200">
                            Discover Culinary Creations for Every Taste
                        </h1>

                        <p className="font-serif text-zinc-300 text-sm md:text-lg mt-3 mb-6 text-center opacity-90">
                            Explore a diverse collection of recipes tailored to every taste. From quick and easy meals to gourmet delights, our handpicked recipes are designed to inspire your next culinary adventure. Start cooking and experience the joy of creating something delicious!
                        </p>

                        <button
                            onClick={(e) => fetchData(e)}
                            className="bg-cream text-gray-900 px-6 py-2 rounded-full font-inter font-medium bg-white/60 hover:bg-white/90 transition-colors mx-auto block"
                        >
                            Surprise Recipe
                        </button>

                        {/* Search bar */}
                        <div className="search-bar flex w-full max-w-2xl mt-8 pb-4">
                            <form action="" onSubmit={(e) => fetchData(e, search)} className="flex w-full">
                                <input
                                    value={search}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Search for recipes...like Veg, cake, etc."
                                    className="w-full text-lg px-2 py-2 pl-8 rounded-full bg-white-100 border-black focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-inter"
                                />
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white rounded-full ml-2 px-4 py-4 font-inter font-medium hover:bg-red-700"
                                >
                                    <FaSearch className="text-white" />
                                </button>
                            </form>
                        </div>
                        {/* Display Error if API fails */}
                        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
                    </div>
                </div>
            </div>

            {/* Conditionally Render NotFound Page */}
            {isSearch && recipes.length === 0 && <NotFound />}

            <div ref={scrollRef} className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipes && recipes.map(recipe => (
                        <RecipeCard key={recipe.idMeal} detail={recipe} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedRecipe;
