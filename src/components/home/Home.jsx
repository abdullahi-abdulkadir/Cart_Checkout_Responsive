
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/images/iconsimages/Arrow.png'

const Home = () => {

  let backRedir = useNavigate();


  return (

    <div>
      <button onClick={() => backRedir("/cart")}> <img src={Arrow} alt="back" /></button>
      <h1>Hello from home page where you can browse your products </h1>
    </div>
  )
}

export default Home