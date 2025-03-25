import { useMemo } from 'react'

function Ingrediants({ detail }) {
    // Prepare ingredients dynamically using the `detail` prop
    // console.log(detail);
    const tempIngredients = useMemo(() => {

        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = detail[`strIngredient${i}`];
            const measure = detail[`strMeasure${i}`];

            if (ingredient) {
                ingredients.push({ name: ingredient, measure });
            }
        }
        return ingredients;
    }, [detail])
    return (
        <>

            <div style={{ fontFamily: 'Roboto' }} className="max-w-4xl mx-auto p-4">

                <div className="p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                    <ul className="bg-green-100 p-4 rounded-lg">
                        {tempIngredients.map((ingredient, index) => (
                            <li key={index} className="flex justify-between items-center py-2 border-b border-green-200">
                                <span>
                                    <i className="fas fa-check-circle text-purple-500" /> {ingredient.name}
                                </span>
                                <span>{ingredient.measure}</span>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>

    )
}

export default Ingrediants
