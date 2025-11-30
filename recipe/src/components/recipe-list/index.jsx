import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../../context';



export default function RecipeList({ recipe }) {
    const { favorites, handleToFavorite } = useContext(GlobalContext);
    const isFavorite = favorites.some(fav => fav.id === recipe?.id);

    return <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={recipe?.image_url} alt="recipe image" className="block-w-full" />
        </div>
        <div >
            <span className="text-sm text-cyan-700 font-medium">{recipe?.publisher}</span>
            <h2 className="font-bold text-2xl truncate text-black">{recipe?.title}</h2>
            <div className="flex gap-4">
                <Link
                    to={`/recipe-item/${recipe?.id}`}
                    className="text-xs p-5 w-max px-0 rounded-lg uppercase font-medium 
                           tracking-wider block shadow-md bg-black text-white mt-5 mx-auto text-center"
                >
                    Recipe Details
                </Link>
                <Link
                    onClick={() => {
                        handleToFavorite(recipe)
                    }}
                    className="text-xs p-5 w-max px-8 rounded-lg uppercase font-medium 
                        tracking-wider block shadow-md bg-black text-white mt-5 mx-auto text-center"
                >
                    {isFavorite ? "Remove from Favorites" : "Add to favorites"}
                </Link>
            </div>

        </div>
    </div>
}   