import React from "react";
import '../styles/css/cart.css'
import Agbada from '../../assets/images/cartimages/agbada_tailor1.png';
import Fila from '../../assets/images/cartimages/fila_tailor2.png';
import Gown from '../../assets/images/cartimages/gown_tailor3.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {

  let checkoutRedir = useNavigate();
  let customRedir = useNavigate();

  const checkOut = () => {
    checkoutRedir("/checkout");
   
  }

   const customSize = () =>{
     customRedir('/customsize');
   }
   
   
   const [quantity, setQuantity] = useState(1);

  const quantIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const quantDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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

        <div className="card-feature">
          <div className="my-image-cover">
            <img src={Agbada} alt="tshirt" />
          </div>
          <div className="container">
            <div className="row my-row">
              <div className="col-lg-12 text-content">
                <h1>AGBADA WEARS</h1>
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
                      <ul>
                       
                         
                  
                        <li className="customer-option" onClick={checkOut}>CHECKOUT</li>
                        <li className="customer-option">REMOVE</li>
                        <li className="customer-option" onClick={quantIncrement}>+</li>  
                        <li className="customer-option" onClick={quantDecrement}>-</li> 
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-feature">
          <div className="my-image-cover">
            <img src={Fila} alt="fila" />
          </div>
          <div className="container">
            <div className="row my-row">
              <div className="col-lg-12 text-content">
                <h1>FILA WEARS</h1>
                <p>
                  Unt in culpa qui officia deserunt mollit vjnksj nabjhbh hhbjsbhbk hnjhsh unt in culpa qui officia
                  deserunt mollit vjnksj nabjhbh hhbjsbhbk hnjhsh .
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
                      <ul>
                        {/* <li className="customer-option">ADD TO CART</li> */}
                        <li className="customer-option" onClick={checkOut}>CHECKOUT</li>
                        <li className="customer-option">REMOVE</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-feature">
          <div className="my-image-cover">
            <img src={Gown} alt="gwon" />
          </div>
          <div className="container">
            <div className="row my-row">
              <div className="col-lg-12 text-content">
                <h1>GOWN WAVE</h1>
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
                      <ul>
                        {/* <li className="customer-option">ADD TO CART</li> */}
                        <li className="customer-option" onClick={checkOut} >CHECKOUT</li>
                        <li className="customer-option">REMOVE</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};




export default Cart