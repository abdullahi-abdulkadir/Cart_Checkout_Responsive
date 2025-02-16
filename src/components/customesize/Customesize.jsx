import React from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/images/iconsimages/Arrow.png'

const Customesize = () => {
let customRedir = useNavigate();
  return (
    <div>
        <div className="btns">
            <span onClick={()=>customRedir("/cart")}><img id='arrow' src={Arrow} alt="back"/></span>
        </div>
        <h1>CUSTOM SIZE</h1>
       <form>
        <h2>MEASUREMENT</h2>
        <label>Shoulder Length</label> <br/>
        <input type='range' name='shoulderLength' id='shoulderLength'/><br/>
        <label>Long Sleeve</label>
        <input type='range' name='sleeve' id='sleeve'/>
        <label>Short Sleeve</label> | <label>Sleeve Length</label> 23cm <br/>
        <label>Neck Size</label> <br/>
        <input type='range' name='' id='shoulderLength'/><br/>
        <label>Chest Size</label> <br/>
        <input type='range' name='chestSize' id='chestSize'/><br/>
        <label>Shirt  Length</label> <br/>
        <input type='range' name='shirtLength' id='shirtLength'/><br/>
        <label>Long Trouser</label><br/>
        <label>Trauser Length</label>
        <input type='range' name='trauserLength' id='trauserLength'/>
        <label>Short trauser</label><br/>
        <label>Waist Size</label><br/>
        <input type='range' name='waistSize' id='waistSize'/> <br/>
        <label>Lap Size</label><br/>
        <input type='range' name='lapSize' id='lapSize'/> <br/>
        <label>Cap Size</label><br/>
        <input type='text' name='capSize' id='capSize' placeholder=' 145cm'/> <br/>
        <label>Shoes Size</label><br/>
        <input type='text' name='capSize' id='capSize' placeholder=' 45'/> <br/>
          <p>Other Specifications</p>
          <button>Save</button>
       </form>
        
    </div>
  )
}

export default Customesize