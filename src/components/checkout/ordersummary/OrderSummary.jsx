
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/css/ordersummary.css";

const OrderSummary = () => {
  const location = useLocation();
  const { userData = {}, cartData = [] } = location.state || {};
  const measurements = location.state?.measurements;
  const navigate = useNavigate();

  const totalPrice = cartData.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="order-summary">
      <button className="back-btn" onClick={() => navigate('/cart')}>Back</button>
      <h1>Order Summary</h1>

      <div className="order-details">
        <p><strong>Product Name:</strong> {userData.productName}</p>
        <p><strong>Product Size:</strong> {userData.productSize}</p>
        <p><strong>Quantity:</strong> {userData.productQuantity}</p>
        <p><strong>Receiver Name:</strong> {userData.nameofReceiver}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Payment Method:</strong> {userData.paymentMethod}</p>
      </div>

      <div className="cart-items">
        <h2>Cart Items</h2>
        {cartData.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-info">
              <strong>{product.title}</strong> - Quantity: {product.quantity}
            </div>
            <span className="price">${(product.price * product.quantity).toFixed(2)}</span>
          </div>
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {measurements && (
        <div className="measurements">
          <h2>Custom Size Measurements</h2>
          <ul>
            {Object.entries(measurements).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className="button-group">
        <button className="cancel-btn" onClick={() => navigate('/cart')}>Cancel Order</button>
        <button className="proceed-btn" onClick={() => navigate('')}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default OrderSummary;
