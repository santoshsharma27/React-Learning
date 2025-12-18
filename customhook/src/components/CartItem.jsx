import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{name}</h4>
        <p>{price}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(id, item.quantity - 1)}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQuantity(id, item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
