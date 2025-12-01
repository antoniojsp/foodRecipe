import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../../context';


export default function RecipeList({ recipe }) {
    const { favorites, handleToFavorite } = useContext(GlobalContext);
    const isFavorite = favorites.some(fav => fav.id === recipe?.id);

    return <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl group">
            <img src={recipe?.image_url} alt="recipe image" className="w-full object-cover group-hover:scale-115 duration-400 transition-transform" />
        </div>
        <div >
            <span className="text-sm text-cyan-700 font-medium">{recipe?.publisher}</span>
            <h2 className="font-bold text-2xl truncate text-black">{recipe?.title}</h2>
            <div className="flex gap-4">
                <Link
                    to={`/recipe-item/${recipe?.id}`}
                    className="text-xs p-5 px-4 py-2 rounded-lg uppercase font-medium 
                           tracking-wider block shadow-md bg-black text-white mt-5 mx-auto text-center outline outline-2 hover:outline-red-600"
                >
                    Recipe Details
                </Link>
                <button
                    onClick={() => {
                        handleToFavorite(recipe)
                    }}
                    className={`text-xs p-5 px-4 py-2 rounded-lg uppercase font-medium 
                        tracking-wider block shadow-md mt-5 mx-auto text-center outline outline-2 hover:outline-red-600 ${isFavorite ? "bg-red-500 text-white" : "bg-black text-white"}`}
                >
                    {isFavorite ? "Remove from Favorites" : "Add to favorites"}
                </button>
            </div>

        </div>
    </div>
}   