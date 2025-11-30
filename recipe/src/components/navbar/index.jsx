import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context"

export default function Navbar() {

    const { searchParam,
        setSearchParam,
        handleSubmit,
        resetSearch,
        recipeList } = useContext(GlobalContext);

    return <nav className="sticky top-0 z-50 bg-white flex justify-between items-center py-8 container 
                            mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
            <NavLink
                to={"/"}
                onClick={() => resetSearch()}
            >
                FoodRecipe - Home
            </NavLink>
        </h2>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={searchParam}
                onChange={x => setSearchParam(x.target.value)}
                placeholder="Enter Items and press 'Enter'"
                className="bg-white/75 p-3 px-8 rounded-full outline-none 
                lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            />
        </form>

        <ul className="flex gap-5">
            {recipeList && <li>
                <NavLink
                    to={"/"}
                    className="text-white hover:text-red-700 duration-300 px-6 py-2 text-center inline-block rounded-lg bg-black mt-3">
                    Results
                </NavLink>
            </li>
            }

            <li>
                <NavLink
                    to={"/favorites"}
                    className="text-white hover:text-red-700 duration-300 px-6 py-2 text-center inline-block rounded-lg bg-black mt-3">
                    Favorite
                </NavLink>
            </li>

        </ul>
    </nav>

} 