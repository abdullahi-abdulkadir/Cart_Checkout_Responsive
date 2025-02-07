import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  let backRedir = useNavigate();

 
  return (

    <div>
       <button onClick={()=>backRedir("/cart")}>Back</button>
      <h1>Hello from home page where you can browse your products </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam in quis illo nemo? Mollitia labore facere consectetur nulla adipisci minima omnis quibusdam. Accusantium quam, debitis facere voluptate amet tempora accusamus cumque ducimus dolores aliquam facilis autem aut temporibus obcaecati saepe, cum tempore optio laboriosam reprehenderit est sequi natus atque odit nostrum! Quasi obcaecati, expedita aspernatur ratione, temporibus laborum illum nisi sunt quos dolor nostrum illo eum repudiandae incidunt officia, adipisci vitae aut ex facere reiciendis. Eveniet corporis deserunt eos. Labore molestiae alias et veniam eveniet vero, possimus nisi maiores culpa sint expedita ea necessitatibus earum, iusto, quisquam quis saepe ad.</p>
      </div>
  )
}

export default Home