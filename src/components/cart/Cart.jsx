import React, { useState } from "react";
import '../styles/css/cart.css'
import Agbada from '../../assets/images/cartimages/agbada_tailor1.png';
import Fila from '../../assets/images/cartimages/fila_tailor2.png';
import Gown from '../../assets/images/cartimages/gown_tailor3.png';
import { useNavigate } from "react-router-dom";

const Cart = () => {

  let checkoutRedir = useNavigate();
  let customRedir = useNavigate();

  const checkOut = () => {
    checkoutRedir("/checkout");
   
  }

   const customSize = () =>{
     customRedir('/customsize');
   }
   
   
   const [products, setProducts] = useState([
    { id: 1, quantity: 1, image: Agbada, title: 'AGBADA WEARS' },
    { id: 2, quantity: 1, image: Fila, title: 'FILA WEARS' },
    { id: 3, quantity: 1, image: Gown, title: 'GOWN WEARS' },
  ]);

  const quantIncrement = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const quantDecrement = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 };
        }
        return product;
      });
    });
  };

// Create a function to handle removal
const removeItem = (id) => {
  setProducts((prevProducts) => {
    return prevProducts.filter((product) => product.id !== id);
  });
};


  return (
    <main style={{ overflowY: 'scroll ', height: '100vh' }}>
      <section className="section-contents">
        <h1 className="cart-title">CART</h1>

        <div className="btn-wrapper btn-content">
          <button type="button" className="btn-resize">LIKED</button>
          <button type="button" className="btn-resize">IN PROGRESS</button>
          <button type="button" className="btn-resize">DELIVERED</button>
        </div>

        {products.map((product) => (
          <div className="card-feature" key={product.id}>
            <div className="my-image-cover">
              <img src={product.image} alt="tshirt" />
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
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                      <div>
                        <button type="button" className="btn customer-size" onClick={customSize} >
                          CUSTOM SIZE
                        </button>
                      </div>
                      <div className="columns">
                    
                      <div className="quntity-wrapper">
                       
                        {/* <div className="quantity-button"> */}
                        <button className="customer-option">{product.quantity}</button>  
                        <button className="customer-option" onClick={() => quantIncrement(product.id)}>+</button>  
                        <button className="customer-option" onClick={() => quantDecrement(product.id)}>-</button> 
                        {/* </div> */}
                  
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
        ))}
      </section>
    </main>
  );
};

export default Cart;