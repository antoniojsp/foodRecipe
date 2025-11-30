import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState(null);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        if (event) {
            event.preventDefault();
        }
        if (!searchParam.trim()) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );
            const data = await response.json();
            if (data?.data?.recipes) {
                setRecipeList(data);
                setRecipeDetailsData(data?.data)
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
            setSearchParam("");
            navigate("/");

        }
    }

    function handleToFavorite(recipe) {
        if (favorites.find(x => x.id === recipe.id)) {
            setFavorites(fav => fav.filter(prev => prev.id !== recipe.id))
        } else {
            setFavorites(prev => [...prev, recipe])
        }
    }

    function resetSearch() {
        setLoading(false);
        setSearchParam("");
        setRecipeList(null);
        navigate("/");
    }

    return <GlobalContext.Provider value={{
        searchParam,
        setSearchParam,
        favorites,
        handleToFavorite,
        recipeDetailsData,
        setRecipeDetailsData,
        loading,
        recipeList,
        handleSubmit,
        resetSearch,
    }}>
        {children}
    </GlobalContext.Provider>
}