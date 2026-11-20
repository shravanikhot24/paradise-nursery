import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../features/cart/CartSlice";
import Navbar from "./Navbar";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="page-wrap cart-page">
        <div className="page-heading">
          <p className="eyebrow">Your green collection</p>
          <h1>Shopping Cart</h1>
          <p>{totalItems} {totalItems === 1 ? "plant" : "plants"} in your cart</p>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is waiting for some greenery.</h2>
            <Link className="primary-btn link-btn" to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product">
                    <h3>{item.name}</h3>
                    <p>Unit price: ₹{item.price}</p>
                    <p className="line-total">Item total: ₹{item.price * item.quantity}</p>
                  </div>
                  <div className="quantity-controls">
                    <button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <strong>{item.quantity}</strong>
                    <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <div><span>Total plants</span><strong>{totalItems}</strong></div>
              <div className="grand-total"><span>Total amount</span><strong>₹{totalCost}</strong></div>
              <button className="primary-btn checkout-btn" onClick={() => window.alert("Coming Soon!")}>Checkout</button>
              <Link className="secondary-btn link-btn" to="/plants">Continue Shopping</Link>
            </aside>
          </>
        )}
      </main>
    </>
  );
}