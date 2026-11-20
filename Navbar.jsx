import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Sprout } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <header className="navbar">
      <Link to="/" className="brand"><Sprout size={25} /> Paradise Nursery</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          <ShoppingCart size={21} /> Cart <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}