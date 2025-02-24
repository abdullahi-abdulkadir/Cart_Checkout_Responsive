
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Arrow from "../../assets/images/iconsimages/Arrow.png";
// import "../styles/css/customsize.css";
// import Measuring from '../../assets/images/iconsimages/Measuringtape.png';



// const Customesize = () => {
//   let customRedir = useNavigate();


//   // Define state for each measurement
//   const [measurements, setMeasurements] = useState({
//     shoulderLength: 120,
//     neckSize: 20,
//     chestSize: 60,
//     shirtLength: 120,
//     trouserLength: 140,
//     waistSize: 160,
//     buttSize: 200,
//     sleeveLength: 120,
//     lapSize: 140,
//   });

//   // Update function
//   const updateValue = (event) => {
//     const { name, value } = event.target;
//     setMeasurements((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="custom-size">
//       <div className="custom-btns">
//         <span onClick={() => customRedir("/cart")}>
//           <img id="arrow" src={Arrow} alt="back" />
//         </span>
//       </div>
//       <h1>CUSTOM SIZE</h1>
//       <form>
//         <h2>MEASUREMENT < img src={Measuring} alt="tape_rule" /></h2>

//         {/* Shoulder Length */}
//         <div className="level-1">
//           <label>
//             Shoulder Length <span>{measurements.shoulderLength} cm</span>
//           </label>
//           <input
//             type="range"
//             name="shoulderLength"
//             min="1"
//             max="500"
//             value={measurements.shoulderLength}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         <div className="level-2">
//           <label > <p>Long Sleeve</p>
//             <label class="switch">
//               <input type="checkbox"   required />
//               <span class="slider round"></span>
//             </label>
//             {/* <p>Short Sleeve  |  Sleeve  Length  <span>23cm </span></p> */}
//             <p>Short Sleeve </p>
//           </label>
//         </div>

//         <div className="level-10">
//           <label>Sleeves Length <span>{measurements.sleeveLength} cm</span></label>
//           <input
//             type="range"
//             name="sleeveLength"
//             min="1"
//             max="500"
//             value={measurements.sleeveLength}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Neck Size */}
//         <div className="level-3">
//           <label>Neck Size <span>{measurements.neckSize} cm</span></label>
//           <input
//             type="range"
//             name="neckSize"
//             min="1"
//             max="500"
//             value={measurements.neckSize}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Chest Size */}
//         <div className="level-4">
//           <label>Chest Size <span>{measurements.chestSize} cm</span></label>
//           <input
//             type="range"
//             name="chestSize"
//             min="1"
//             max="500"
//             value={measurements.chestSize}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Shirt Length */}
//         <div className="level-5">
//           <label>Shirt Length <span>{measurements.shirtLength} cm</span></label>
//           <input
//             type="range"
//             name="shirtLength"
//             min="1"
//             max="500"
//             value={measurements.shirtLength}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         <div className="level-6">
//           <label> <p>Long Trouser</p>
//             <label class="switch">
//               <input type="checkbox"   required/>
//               <span class="slider round"></span>
//             </label>
//             <p>  Short Trauser</p>
//           </label>
//         </div>

//         {/* Trouser Length */}
//         <div className="level-7">
//           <label>Trouser Length <span>{measurements.trouserLength} cm</span></label>
//           <input
//             type="range"
//             name="trouserLength"
//             min="1"
//             max="500"
//             value={measurements.trouserLength}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Waist Size */}
//         <div className="level-8">
//           <label>Waist Size <span>{measurements.waistSize} cm</span></label>
//           <input
//             type="range"
//             name="waistSize"
//             min="1"
//             max="500"
//             value={measurements.waistSize}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Butt Size */}
//         <div className="level-9">
//           <label>Butt Size <span>{measurements.buttSize} cm</span></label>
//           <input
//             type="range"
//             name="buttSize"
//             min="1"
//             max="500"
//             value={measurements.buttSize}
//             onChange={updateValue}
//             required
//           />
//         </div>

//         {/* Lap Size */}
//         <div className="level-10">
//           <label>Lap Size <span>{measurements.lapSize} cm</span></label>
//           <input
//             type="range"
//             name="lapSize"
//             min="1"
//             max="500"
//             value={measurements.lapSize}
//             onChange={updateValue}
//             required
//           />
//         </div>


//         <div className='input-center'>
//           <h4> Cap Sizes  <input type='text' name='capSize' id='capSize' placeholder=' 145 cm'  required/>
//           </h4><br></br>
//           <h4>Shoe Size <input type='text' name='shoesSize' id='shoeSize' placeholder=' 45'  required/>
//           </h4>
//         </div>
//         <div className="others-container">
//           < input type='text' name='other-specification' id="others-input" placeholder='Others Specification'  required />
//         </div>

//         <br />
//         <button className="save-btn">Save</button>
//       </form>
//     </div>
//   );
// };

// export default Customesize;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/images/iconsimages/Arrow.png";
import "../styles/css/customsize.css";
import Measuring from '../../assets/images/iconsimages/Measuringtape.png';
import { useEffect } from "react"; // Import useEffect



const Customesize = () => {
  let customRedir = useNavigate();
  let navigate = useNavigate();

  const [measurements, setMeasurements] = useState(() => {
    const savedData = localStorage.getItem("userMeasurements");
    return savedData ? JSON.parse(savedData) : {
      shoulderLength: 120,
      neckSize: 20,
      chestSize: 60,
      shirtLength: 120,
      trouserLength: 140,
      waistSize: 160,
      buttSize: 200,
      sleeveLength: 120,
      lapSize: 140,
      capSize: "50",
      shoesSize: "42",
      otherSpecification: "None"
    };
  });

  const [error, setError] = useState("");


  useEffect(() => {
    localStorage.removeItem("userMeasurements");
  }, []);
  
  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Current Measurements:", measurements); // Debugging log
  
    // Ensure all fields are filled
    const emptyFields = Object.entries(measurements).filter(([key, value]) => 
      value === "" || value === undefined || value === null
    );
  
    if (emptyFields.length > 0) {
      console.log("Empty fields found:", emptyFields); // Debugging log
      setError("Please fill in all required fields before saving.");
      return;
    }
  
    // Save measurements
    localStorage.setItem("userMeasurements", JSON.stringify(measurements));
    alert("Measurements saved successfully!");
    navigate("/checkout", { state: { measurements } });
  
    setError(""); // Clear error message
  };
  
  

  return (
    <div className="custom-size">
      <div className="custom-btns">
        <span onClick={() => customRedir("/cart")}>
          <img id="arrow" src={Arrow} alt="back" />
        </span>
      </div>
      <h1>CUSTOM SIZE</h1>
      {error && <p className="error-message">{error}</p>}
      <form>
        <h2>MEASUREMENT <img src={Measuring} alt="tape_rule" /></h2>
        <div className="level-1">
          <label>Shoulder Length <span>{measurements.shoulderLength} cm</span></label>
          <input type="range" name="shoulderLength" min="1" max="500" value={measurements.shoulderLength} onChange={handleRangeChange} required />
        </div>
        <div className="level-10">
          <label>Sleeves Length <span>{measurements.sleeveLength} cm</span></label>
          <input type="range" name="sleeveLength" min="1" max="500" value={measurements.sleeveLength} onChange={handleRangeChange} required />
        </div>
        <div className="level-3">
          <label>Neck Size <span>{measurements.neckSize} cm</span></label>
          <input type="range" name="neckSize" min="1" max="500" value={measurements.neckSize} onChange={handleRangeChange} required />
        </div>
        <div className="level-4">
          <label>Chest Size <span>{measurements.chestSize} cm</span></label>
          <input type="range" name="chestSize" min="1" max="500" value={measurements.chestSize} onChange={handleRangeChange} required />
        </div>
        <div className="level-5">
          <label>Shirt Length <span>{measurements.shirtLength} cm</span></label>
          <input type="range" name="shirtLength" min="1" max="500" value={measurements.shirtLength} onChange={handleRangeChange} required />
        </div>
        <div className="level-7">
          <label>Trouser Length <span>{measurements.trouserLength} cm</span></label>
          <input type="range" name="trouserLength" min="1" max="500" value={measurements.trouserLength} onChange={handleRangeChange} required />
        </div>
        <div className="level-8">
<label>Waist Size <span>{measurements.waistSize} cm</span></label>
<input type="range" name="waistSize" min="1" max="500" value={measurements.waistSize} onChange={handleRangeChange} required />
</div>


<div className="level-9">
      <label>Butt Size <span>{measurements.buttSize} cm</span></label>
      <input type="range" name="buttSize" min="1" max="500" value={measurements.buttSize} onChange={handleRangeChange} required />
    </div>
    <div className="level-10">
      <label>Lap Size <span>{measurements.lapSize} cm</span></label>
      <input type="range" name="lapSize" min="1" max="500" value={measurements.lapSize} onChange={handleRangeChange} required />
    </div>
    <div className='input-center'>
      <h4> Cap Size {"\u00a0 "} {"\u00a0 "}
        <input type='text' name='capSize' id='capSize' placeholder=' 145 cm' value={measurements.capSize} onChange={handleTextChange} required />
      </h4>
      <br />
      <h4>Shoe Size {"\u00a0 "}
        <input type='text' name='shoesSize' id='shoeSize' placeholder=' 45' value={measurements.shoesSize} onChange={handleTextChange} required />
      </h4>
    </div>
    <div className="others-container">
      <input type='text' name='otherSpecification' id="others-input" placeholder='Others Specification' value={measurements.otherSpecification} onChange={handleTextChange} required />
    </div>
    <br />
    {error && <p className="error-message">{error}</p>}
    <button type="button" className="save-btn" onClick={handleSave}>Save</button>
  </form>
</div>

);
};

export default Customesize;
