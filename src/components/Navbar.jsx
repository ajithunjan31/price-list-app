import { Link } from "react-router"

function Navbar() {
    return (
        <nav className="flex justify-between bg-neutral-800 p-4 text-white">
            <div>
                <Link to="/" >
                    <h1 className="text-2xl font-bold py-1">My Products</h1>
                </Link>
                <p className="text-gray-200 text-sm">PRODUCTS PRICE LIST</p>
            </div>

            <div className="my-2">
                <input type="text" className="w-70 rounded-3xl bg-neutral-100 p-1 px-4 text-lg text-black focus:outline-0" placeholder="Search products.." />
                <Link to="/add">
                    <button className="text-lg rounded-full w-9 h-9 cursor-pointer text-black p-1 bg-white ml-2">+</button>
                </Link>
            </div>
        </nav>

    )
}

export default Navbar
