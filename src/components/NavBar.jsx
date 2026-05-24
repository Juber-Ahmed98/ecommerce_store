import { Link } from "react-router-dom";

function NavBar() {
  return (
    // Header
    <header className="bg-white/70 backdrop-blur-md border-b border-slate-200">
        {/* Nav */}
      <nav className="max-w-[1500px] mx-auto px-6 py-[18px] flex items-center justify-between">
        {/*  */}
        <div className="logo font-black">
          <Link to="/" className="font-display font-bold text-[18px] tracking-tight">JBR LABS</Link>
        </div>
        {/*  */}
        <div className="links flex flex-row gap-5">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        {/*  */}
        <div className="links flex flex-row gap-5 items-center">
            <Link to="/login" className="text-slate-900 no-underline">Login</Link>
            <Link to="/basket" className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-[13px]">Basket</Link>
        </div>
        {/*  */}
      </nav>
      {/*  */}
    </header>
  );
}

export default NavBar;
