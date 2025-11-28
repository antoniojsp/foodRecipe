import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context"
export default function Navbar() {

    const { searchParanm, 
            setSearchParam, 
            handleSubmit } = useContext(GlobalContext);
            
    return <nav className="flex justify-between items-center py-8 container 
                            mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2x1 font-semibold=">
            <NavLink to={"/"} >FoodRecipe</NavLink>
            </h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={searchParanm}
                onChange={x => setSearchParam(x.target.value)}
                placeholder="Enter Items..."
                className="bg-white/75 p-3 px-8 rounded-full outline-none 
                lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            />
        </form>
        <ul className="flex gap-5">
            <NavLink
                to={"/"}
                className="text-black hover:text-gray-700 duration-300">
                Home
            </NavLink>
            <NavLink
                to={"/favorites"} 
                className="text-black hover:text-gray-700 duration-300">
                Favorite
            </NavLink>

        </ul>
    </nav>

} 