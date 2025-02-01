import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    let backRedir = useNavigate();

    return (
        <div>Checkout
        <div className="btns">
            <button onClick={()=>backRedir("/cart")}>Back</button>
        </div>
            <h1>Hello from checout</h1>
        </div>
    )
}

export default Checkout