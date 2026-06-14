import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Products from "./pages/Products";
import { BasketProvider } from "./context/BasketContext";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BasketProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="grow justify-center max-w-375 mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <footer />
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;
