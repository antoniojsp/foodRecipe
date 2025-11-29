import { useContext } from 'react';
import { GlobalContext } from '../../context';
import RecipeList from '../../components/recipe-list';
export default function Home() {
  const { recipeList,
    loading } = useContext(GlobalContext);

  if (loading) {
    return <div> Loading... </div>
  }

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        recipeList &&
        ((recipeList?.data?.recipes?.length > 0) ?
          recipeList.data.recipes.map((recipe, idx) => (
            <RecipeList key={idx} recipe={recipe} />
          )) :
          <p className='lg:text-4x1 text-x1 text-center text-black font-extrabold'>
            No recipes found. Try searching for something else!</p>)
      }

    </div>
  );
}