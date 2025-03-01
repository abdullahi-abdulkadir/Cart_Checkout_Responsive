

import React, { useEffect, useState } from "react";
import '../styles/css/cart.css';
import Agbada from '../../assets/images/cartimages/agbada_tailor1.png';
import Fila from '../../assets/images/cartimages/fila_tailor2.png';
import Gown from '../../assets/images/cartimages/gown_tailor3.png';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartDataState } from '../cartstate/cartState';

const Cart = () => {
  let checkoutRedir = useNavigate();
  let customRedir = useNavigate();
  let homeRedir = useNavigate();

  // Use Recoil State for cart data
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure cart has default products if it's empty
  useEffect(() => {
    if (!isMounted && cartData.length === 0) {
      setCartData([
        { id: 1, quantity: 1, image: Agbada, title: 'AGBADA WEARS' },
        { id: 2, quantity: 1, image: Fila, title: 'FILA WEARS' },
        { id: 3, quantity: 1, image: Gown, title: 'GOWN WEARS' },
      ]);
    }
    setIsMounted(true);
  }, [cartData, setCartData, isMounted]);

  // Increment Quantity
  const quantIncrement = (id) => {
    setCartData((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // Decrement Quantity
  const quantDecrement = (id) => {
    setCartData((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 }
          : product
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartData((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      return updatedCart.length === 0 ? [] : updatedCart;
    });
  };

  // Checkout Navigation with Cart Data
  const checkOut = () => {
    checkoutRedir("/checkout", { state: { products: cartData } });
  };

  return (
    <main style={{ overflowY: 'scroll', height: '100vh' }}>
      <section className="section-contents">
        <h1 className="cart-title">CART</h1>

        <div className="btn-wrapper btn-content">
          <button type="button" className="btn-resize">LIKED</button>
          <button type="button" className="btn-resize">IN PROGRESS</button>
          <button type="button" className="btn-resize">DELIVERED</button>
        </div>

        { Array.isArray(cartData) && cartData.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Start shopping to add items to your cart!</p>
            <button onClick={() => homeRedir("/")}>Go home</button>
          </div>
        ) : (
          cartData.map((product) => (
            <div className="card-feature" key={product.id}>
              <div className="my-image-cover">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="container">
                <div className="row my-row">
                  <div className="col-lg-12 text-content">
                    <h1>{product.title}</h1>
                    <p>
                    Unt in culpa qui officia deserunt mollit vjnksj nabjhbh hhbjsbhbk hnjhsh unt in culpa qui officia
                    deserunt mollit vjnksj nabjhbh hhbjsbhbk hnjhsh.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="my-option">
                      <div className="size-options">
                        <div>
                          <button type="button" className="btn customer-size" onClick={() => customRedir('/customsize')}>
                            CUSTOM SIZE
                          </button>
                        </div>
                        <div className="columns">
                          <div className="quntity-wrapper">
                            <button className="customer-option " id="product-quantity-btn">{product.quantity}</button>
                            <button className="customer-option" onClick={() => quantIncrement(product.id)}>+</button>
                            <button className="customer-option" onClick={() => quantDecrement(product.id)}>-</button>
                          </div>
                          <ul className="customer-option-wrapper">
                            <li className="customer-option" onClick={checkOut}>CHECKOUT</li>
                            <li className="customer-option" onClick={() => removeItem(product.id)}>REMOVE</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Cart;
