import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  const { name, price } = product;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
