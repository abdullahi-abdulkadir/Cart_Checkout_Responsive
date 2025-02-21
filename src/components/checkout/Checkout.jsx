import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/css/checkout.css';
import Arrow from '../../assets/images/iconsimages/Arrow.png';
import Card from '../../assets/images/checkoutimages/Card.png';
import Bitcoin from '../../assets/images/checkoutimages/Bitcoin.png';
import Paypal from '../../assets/images/checkoutimages/PayPal.png';
import Background from '../../assets/images/logos/Background_tailo_logo.png'

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className='checkout'>
      {/* <header className='mobile-header'>
           <img src={Background} alt='logo'/>
      </header> */}
      <h1>Checkout</h1>
      <div className="btns">
        < span onClick={() => navigate("/cart")}> <img id='arrow' src={Arrow} alt="back" /></span>
      </div>

      <form method='post'>
        <fieldset>
          <h1 className='order-id'>2355-YHT-789-12G</h1>
          
          <legend>Product Details</legend>
          <div className='first-input'>
          <label className='label-1'> Product Name: <input type="text" id="productName" name="productName" placeholder=' XXX XXXX XXX' />
          </label>
          </div>
          
          <br />
          <div className="second-input">
          <label className='label-2'>Product Size: <input type="text" id="productSize" name="productSize" placeholder=' 120cm/230cm/100cm' />
          </label>
          </div>
         
          <br />
          <div className="third-input">
          <label className='label-3'>Product Quantity: <input type="text" id="productQuantity" name="productQuantity" placeholder=' XL 20' className='last-input' />
          </label>
          </div>
       

        </fieldset>
        <fieldset>
          <legend>Delivery Details</legend>
          <div className="fourth-input">
          <label className='label-4'>Receiver Name: <input type="text" id="nameofReceiver" name="nameofReceiver" placeholder=' Ogedembge Julius Ayo' />
          </label>
          </div>
        
          <br />
          <div className="fift-input">
          <label className='label-5'>Full Address: <input type="text" id="address" name="address" placeholder=' 29 Oba Murphy Adetoro strt.' />
          </label>
          </div>
         
          <br />
          <div className="sixt-input">
          <label className='label-6'>Phone Number: <input type="text" id="phone" name="phone" placeholder=' Type  phone number' className='last-input' />
          </label>
          </div>
         
        </fieldset>
        <fieldset>
          <legend>Payment Details</legend>
          <label className='label-7'>
            <p>Payment Method:</p>
            <select>
              <option>Pay on delivery</option>
              <option value={'paid-on-delivery'}>Pay on delivery</option>
            </select>
          </label>
          <div className="image-group">
            <img src={Paypal} alt='paypal' />
            <img src={Bitcoin} alt='bitcoin' />
            <img src={Card} alt='card' />
          </div>

        </fieldset>
             <button id='btn-danger-pay'type='submit'>Pay</button>                     
      </form>
      <br></br>
      <br></br>
    </div>
  );
};

export default Checkout;
