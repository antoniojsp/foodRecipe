import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeList from "../../components/recipe-list";

export default function Favorite() {
  const { favorites } = useContext(GlobalContext);
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favorites && favorites.length > 0 ?
        favorites.map((recipe, idx) => (
         <RecipeList key={idx} recipe={recipe}/>
        )):
        <p className='lg:text-4x1 text-x1 text-center text-black font-extrabold'>
          No recipes found. Try adding some recipes!</p>
      }
      
    </div>
  );
}