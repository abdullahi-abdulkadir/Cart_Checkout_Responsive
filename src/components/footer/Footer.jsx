import React from 'react';
import '../styles/css/footer.css'
import Background from '../../assets/images/logos/Background (1).png';
import Facebook from '../../assets/images/iconsimages/facebook.png';
import Twitter from '../../assets/images/iconsimages/twitter.png';
import Instagram from '../../assets/images/iconsimages/instagram.png';
import Telegram from '../../assets/images/iconsimages/telegram.png';
import Linkedin from '../../assets/images/iconsimages/linkedin.png';


const Footer = () => {
  return (
    <div className='Footer-mob'>

      <div className='footer-desktop'>
      <div className="footer-left">
        <ul>
          <li>
            <img id='footer-left-logo' src={Background} alt="Company Logo" width="131px" />
          </li>
          <li>
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={Facebook} alt="Facebook Icon" width="55px" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={Twitter} alt="Twitter Icon" width="55px" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={Instagram} alt="Instagram Icon" width="55px" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={Linkedin} alt="LinkedIn Icon" width="55px" />
            </a>
          </li>
          <li>
            <a href="https://telegram.org" aria-label="Telegram">
              <img src={Telegram} alt="Telegram Icon" width="55px" />
            </a>
          </li>
        </ul>
      </div>

      {/* Middle Section */}

      <section className="footer-middle">
        <h3>JOIN OUR NEWSLETTER</h3>
        <form>
          <input id="name" type="text" placeholder="Name" />
          <input id="email" type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Right Section  */}
      <div className="footer-right">
        <ul>
          <p>About Us</p>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      </div>
      

      {/* mobile view here */}
      <div className="my-footer-middle">
        <h3>JOIN OUR NEWSLETTER</h3>
        <form>
          <input id="name" type="text" placeholder="Name" />
          <input id="email" type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="my-footer-mobile">
        <div className="my-footer-left">
          <ul>
            <li>
              <img src={Facebook} alt="Facebook" width="35px" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" width="35px" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram" width="35px" />
            </li>
            <li>
              <img src={Linkedin} alt="LinkedIn" width="35px" />
            </li>
            <li>
              <img src={Telegram} alt="Telegram" width="35px" />
            </li>
          </ul>
        </div>

        <div className="my-footer-right">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-footer-logo">
        <img src={Background} width="75px" alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
