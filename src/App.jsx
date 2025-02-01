// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
// import { RecoilRoot } from "recoil";
// import "./App.css";
// import './index.css'
// // Import Components
// import Nav from "./components/nav/Nav";
// import Footer from "./components/footer/Footer"; // Ensure Footer component exists
// import Signout from "./components/signout/Signout";
// import Home from "./components/home/Home";
// import Cart from "./components/cart/Cart";
// import Profile from "./components/profile/Profile"; // Ensure this file exists

// function App() {
//   return (
//     <>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/signout" element={<Signout />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import Signout from "./components/signout/Signout";
import "./App.css";
import './index.css'
import Checkout from "./components/checkout/Checkout";
import Customesize from "./components/customesize/Customesize";

const App = () => {
  return (
    <div style={{ overflowY: 'scroll ', height: '100vh'}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/customsize" element={<Customesize/>} />
      </Routes>
      <Footer />
  
    </div>
   
  );
};

export default App;

