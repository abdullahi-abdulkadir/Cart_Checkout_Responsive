// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const OrderSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const products = location.state?.products || [];

//   return (
//     <div>
//       <h1>Order Summary</h1>
//       {products.length > 0 ? (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               <img src={product.image} alt={product.title} width="50" />
//               <strong>{product.title}</strong> - Quantity: {product.quantity}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No items found.</p>
//       )}
//       <button onClick={() => navigate("/")}>Go to Home</button>
//     </div>
//   );
// };

// export default OrderSummary;

 
// const OrderSummary = () => {
//   const location = useLocation();
//   const { userData, cartData } = location.state || {};
 
//   console.log('userData:', userData);
//   console.log('cartData:', cartData);

//   if (!userData || !cartData) {
//     return <p>No data available</p>;
//   }

//   return (
//     <div>
//       <h1>Order Summary</h1>
//       <p>Product Name: {userData.productName}</p>
//       <p>Product Size: {userData.productSize}</p>
//       <p>Product Quantity: {userData.productQuantity}</p>
//       <p>Receiver Name: {userData.nameofReceiver}</p>
//       <p>Full Address: {userData.address}</p>
//       <p>Phone: {userData.phone}</p>
//       <p>Payment Method: {userData.paymentMethod}</p>
      
//        { cartData.length > 0 ?(
      
//       <ul>
//         {cartData.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} width="50" />
//             <strong>{product.title}</strong> - Quantity: {product.quantity}
//           </li>
//         ))}
//       </ul>): ( <p>No items in cart</p>) 
//       }
//     </div>
//   );
// };



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const OrderSummary = () => {
  const location = useLocation();
  const { userData = {}, cartData = [] } = location.state || {};
  const measurements = location.state?.measurements;

  console.log('cartData:', cartData);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> navigate('/cart')}>back</button>
     
      <h1>Order Summary</h1>
      {/* User data */}
      <p>Product Name: {userData.productName}</p>
      <p>Product Size: {userData.productSize}</p>
      <p>Product Quantity: {userData.productQuantity}</p>
      <p>Receiver Name: {userData.nameofReceiver}</p>
      <p>Full Address: {userData.address}</p>
      <p>Phone: {userData.phone}</p>
      <p>Payment Method: {userData.paymentMethod}</p>

      {/* Cart items */}
      <h2>Cart Items:</h2>
      <ul>
        {cartData.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            <strong>{product.title}</strong> - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    {/*Measurements */}
    {measurements && (
  <div>
    <h2>Custom Size Measurements</h2>
    <ul>
      {Object.entries(measurements).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};
export default OrderSummary;



