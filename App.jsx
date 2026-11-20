import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow light">Bring nature home</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="landing-tagline">A little green makes a world of difference.</p>
          <AboutUs />
          <Link to="/plants" className="primary-btn get-started">Get Started</Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
