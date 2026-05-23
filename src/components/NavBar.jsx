import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="navBar justify-center border-b-3 border-[#C4C7C9] bg-glass">
            <nav className="flex justify-between mx-auto w-full text-lg p-5  max-w-[1500px]">
                <div className="logo font-black">
                    <Link to="/">JBR LABS</Link>
                </div>
                <div className="links flex flex-row gap-5">
                    <Link to="/products">Products</Link>
                    <Link to="/basket">Basket</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;