// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/css/checkout.css';
// import Arrow from '../../assets/images/iconsimages/Arrow.png';
// import Card from '../../assets/images/checkoutimages/Card.png';
// import Bitcoin from '../../assets/images/checkoutimages/Bitcoin.png';
// import Paypal from '../../assets/images/checkoutimages/PayPal.png';
// import Background from '../../assets/images/logos/Background_tailo_logo.png'

// const Checkout = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='checkout'>
//       {/* <header className='mobile-header'>
//            <img src={Background} alt='logo'/>
//       </header> */}
//       <h1>Checkout</h1>
//       <div className="btns">
//         < span onClick={() => navigate("/cart")}> <img id='arrow' src={Arrow} alt="back" /></span>
//       </div>

//       <form method='post'>
//         <fieldset>
//           <h1 className='order-id'>2355-YHT-789-12G</h1>

//           <legend>Product Details</legend>
//           <div className='first-input'>
//           <label className='label-1'> Product Name: <input type="text" id="productName" name="productName" placeholder=' XXX XXXX XXX' />
//           </label>
//           </div>

//           <br />
//           <div className="second-input">
//           <label className='label-2'>Product Size: <input type="text" id="productSize" name="productSize" placeholder=' 120cm/230cm/100cm' />
//           </label>
//           </div>

//           <br />
//           <div className="third-input">
//           <label className='label-3'>Product Quantity: <input type="text" id="productQuantity" name="productQuantity" placeholder=' XL 20' className='last-input' />
//           </label>
//           </div>


//         </fieldset>
//         <fieldset>
//           <legend>Delivery Details</legend>
//           <div className="fourth-input">
//           <label className='label-4'>Receiver Name: <input type="text" id="nameofReceiver" name="nameofReceiver" placeholder=' Ogedembge Julius Ayo' />
//           </label>
//           </div>

//           <br />
//           <div className="fift-input">
//           <label className='label-5'>Full Address: <input type="text" id="address" name="address" placeholder=' 29 Oba Murphy Adetoro strt.' />
//           </label>
//           </div>

//           <br />
//           <div className="sixt-input">
//           <label className='label-6'>Phone Number: <input type="text" id="phone" name="phone" placeholder=' Type  phone number' className='last-input' />
//           </label>
//           </div>

//         </fieldset>
//         <fieldset>
//           <legend>Payment Details</legend>
//           <label className='label-7'>
//             <p>Payment Method:</p>
//             <select>
//               <option>Pay on delivery</option>
//               <option value={'paid-on-delivery'}>Pay on delivery</option>
//             </select>
//           </label>
//           <div className="image-group">
//             <img src={Paypal} alt='paypal' />
//             <img src={Bitcoin} alt='bitcoin' />
//             <img src={Card} alt='card' />
//           </div>

//         </fieldset>
//              <button id='btn-danger-pay'type='submit'>Pay</button>                     
//       </form>
//       <br></br>
//       <br></br>
//     </div>
//   );
// };

// export default Checkout;












import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/css/checkout.css';
import Arrow from '../../assets/images/iconsimages/Arrow.png';
import Card from '../../assets/images/checkoutimages/Card.png';
import Bitcoin from '../../assets/images/checkoutimages/Bitcoin.png';
import Paypal from '../../assets/images/checkoutimages/PayPal.png';
import Background from '../../assets/images/logos/Background_tailo_logo.png';
import { useRecoilValue } from "recoil";
import { cartDataState } from "../cartstate/cartState";

const Checkout = () => {
  
  const navigate = useNavigate();
  const cartData = useRecoilValue(cartDataState);
  const location = useLocation();
  const measurements = location.state?.measurements;
  




  const handlePay = () => {
    console.log('cartData before navigation:', cartData);
    if (!measurements) {
      alert("Please provide custom size measurements before proceeding to payment.");
      navigate("/customsize");
    } else {
      // Proceed with payment
      navigate("/order-summary", { state: { userData, cartData, measurements } });
    }
  };



  const [userData, setUserData] = useState({
    productName: '',
    productSize: '',
    productQuantity: '',
    nameofReceiver: '',
    address: '',
    phone: '',
    paymentMethod: '',
  });

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSelectPayment = (method) => {
    setSelectedPayment(method);
    setUserData({ ...userData, paymentMethod: method });
  };


  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userData.productName ||
      !userData.productSize ||
      !userData.productQuantity ||
      !userData.nameofReceiver ||
      !userData.address ||
      !userData.phone ||
      !userData.paymentMethod
    ) {
    setErrorMessage('Please fill in all fields');
    return;
  }
    setErrorMessage('');
    localStorage.setItem('userData', JSON.stringify(userData));
    handlePay(); // Call handlePay function only when form data is valid
  };


  return (
    <div className='checkout'>





      <h1>Checkout</h1>

      <div className="btns">
        <span onClick={() => navigate("/cart")}>
          <img id='arrow' src={Arrow} alt="back" />
        </span>
      </div>

      <form method='post' onSubmit={handleSubmit}>
        <fieldset>
          <h1 className='order-id'>2355-YHT-789-12G</h1>
          <legend>Product Details</legend>
          <div className='first-input'>
            <label className='label-1'>Product Name:
            {"\u00a0 "}  <input type="text" 
              id="productName" 
              name="productName" 
              placeholder=' XXX XXXX XXX' 
              value={userData.productName} 
              onChange={handleInputChange} 
              />
            </label>
          </div>
          <br />
          <div className="second-input">
            <label className='label-2'>Product Size:
            {"\u00a0 "}  <input type="text" 
              id="productSize" 
              name="productSize" 
              placeholder=' 120cm/230cm/100cm' 
              value={userData.productSize} 
              onChange={handleInputChange} 
              />
            </label>
          </div>
          <br />
          <div className="third-input">
            <label className='label-3'>Product Quantity:
            {"\u00a0 "} <input type="text" 
              id="productQuantity" 
              name="productQuantity" 
              placeholder=' XL 20' 
              className='last-input' 
              value={userData.productQuantity} 
              onChange={handleInputChange} 
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Delivery Details</legend>
          <div className="fourth-input">
            <label className='label-4'>Receiver Name:
            {"\u00a0 "}  <input type="text" 
              id="nameofReceiver" 
              name="nameofReceiver" 
              placeholder=' Ogedembge Julius Ayo'
              value={userData.nameofReceiver} 
              onChange={handleInputChange} 
              />
            </label>
          </div>
          <br />
          <div className="fift-input">
            <label className='label-5'>Full Address:
            {"\u00a0 "}  <input type="text" 
              id="address" 
              name="address" 
              placeholder=' 29 Oba Murphy Adetoro strt.' 
              onChange={handleInputChange} 
              value={userData.address} 
              />
            </label>
          </div>
          <br />
          <div className="sixt-input">
            <label className='label-6'>Phone Number:
            {"\u00a0 "}  <input type="text" 
              id="phone" 
              name="phone" 
              placeholder=' Type phone number' 
              className='last-input' 
              value={userData.phone} 
              onChange={handleInputChange} 
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Payment Details</legend>
          <label className='label-7'>
            <p>Payment Method:</p>
            <select name="paymentMethod" value={userData.paymentMethod} onChange={handleInputChange}>
              <option value="">Select Payment Method</option>
              <option value="paid-on-delivery">Pay on delivery</option>
            </select>

          </label>

          <div className="image-group">
            <img
              src={Paypal}
              alt='paypal'
              className={selectedPayment === 'paypal' ? 'selected' : ''}
              onClick={() => handleSelectPayment('paypal')}
            />
            <img
              src={Bitcoin}
              alt='bitcoin'
              className={selectedPayment === 'bitcoin' ? 'selected' : ''}
              onClick={() => handleSelectPayment('bitcoin')}
            />
            <img
              src={Card}
              alt='card'
              className={selectedPayment === 'card' ? 'selected' : ''}
              onClick={() => handleSelectPayment('card')}
            />
          </div>
        </fieldset>
        {errorMessage && <p className="error-text">{errorMessage}</p>} {/* Error Message Here */}

        <button id='btn-danger-pay' type='submit' >Pay</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default Checkout;
