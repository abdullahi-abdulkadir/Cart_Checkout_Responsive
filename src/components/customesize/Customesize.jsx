import React from 'react'
import { useNavigate } from 'react-router-dom'

const Customesize = () => {
let customRedir = useNavigate();
  return (
    <div>
        <div className="btns">
            <button onClick={()=>customRedir("/cart")}>Back</button>
        </div>
        <h1>Hello from custom size</h1>
        Customesize
        
    </div>
  )
}

export default Customesize