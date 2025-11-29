import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState(null);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favorites, setFavorites] = useState([]);


    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );
            const data = await response.json();
            console.log(data)
            if (data?.data?.recipes) {
                setRecipeList(data);
                setRecipeDetailsData(data?.data) 
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
            setSearchParam("");
        }
    }

    function handleToFavorite(recipe) {
        setFavorites(prev => [...prev, recipe])
    }

    return <GlobalContext.Provider value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading, 
        recipeDetailsData,
        setRecipeDetailsData,
        handleToFavorite,
        favorites
    }}>
        {children}
    </GlobalContext.Provider>
}