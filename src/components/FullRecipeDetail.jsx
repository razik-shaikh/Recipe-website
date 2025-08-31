import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./recipedetails/Header";
import Ingrediants from "./recipedetails/Ingredients";
import Instruction from "./recipedetails/Instruction";

const FullRecipeDetail = () => {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState();


    useEffect(() => {
        fetchRecipeData();
    }, [id]);

    const fetchRecipeData = async () => {
        const recipeApiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        try {
            const response = await fetch(recipeApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();  
            // console.log(jsonData.meals[0]);
            setRecipeData(jsonData.meals[0]);
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        }
    }
    // fetchRecipeData();
    if (!recipeData) {
        return <div>Loading...</div>; // Render loading state if recipeData is not available
    }

    return (
        <div>
            <Header detail={recipeData} />
            <Ingrediants detail={recipeData} />
            <Instruction detail={recipeData} />
        </div>
    );
};

export default FullRecipeDetail;
