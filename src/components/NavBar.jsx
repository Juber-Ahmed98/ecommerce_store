import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

function NavBar() {
  const { basket } = useBasket();
  // redule loops through every item in basket adds its quantity to a running sum starting from 0
  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // Header
    <header className="bg-white/70 backdrop-blur-md border-b border-slate-200 sticky top-0">
      {/* Nav */}
      <nav className="max-w-[1500px] mx-auto px-6 py-[18px] flex items-center justify-between">
        {/*  */}
        <div className="logo font-black">
          <Link
            to="/"
            className="font-display font-bold text-[18px] tracking-tight"
          >
            JBR LABS
          </Link>
        </div>
        {/*  */}
        <div className="links flex flex-row gap-5">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        {/*  */}
        <div className="links flex flex-row gap-5 items-center">
          <Link to="/login" className="text-slate-900 no-underline">
            Login
          </Link>
          <Link
            to="/basket"
            className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-[13px]"
          >
            Basket
            {/* renders nothing unless total itels is greater than nothing */}
            {totalItems > 0 && (
              <span className="bg-[#2563EB] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        {/*  */}
      </nav>
      {/*  */}
    </header>
  );
}

export default NavBar;
