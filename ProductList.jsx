import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { categories } from "../data/plants";
import Navbar from "./Navbar";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <>
      <Navbar />
      <main className="page-wrap">
        <div className="page-heading">
          <p className="eyebrow">Find your leafy companion</p>
          <h1>Shop Houseplants</h1>
          <p>Thoughtfully chosen plants to make your space feel alive.</p>
        </div>
        {categories.map((category) => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>₹{plant.price}</strong>
                      <button
                        className="primary-btn"
                        disabled={isAdded(plant.id)}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded(plant.id) ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}