import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  let backRedir = useNavigate();

 
  return (

    <div><h1>
          <button onClick={()=>backRedir("/cart")}>Back</button>
      Home</h1></div>
  )
}

export default Home