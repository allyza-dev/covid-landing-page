

import  logoIcon  from '../assets/logo.svg';
import footer from '../assets/footer.svg';
import fb from '../assets/fb.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/yt.svg';
import vimeo from '../assets/vim.svg';

export default function Footer(){
    return (
        <footer>
          <h1>Have Question in mind? <br/> Let us help you</h1>
          <div className="footer-input">
            <input type="text" placeholder='sampledemo@email.com'/>
            <button className='footer-btn'>Send</button>
          </div>
          <nav className="footer-navigation">
            <div className="logo">
              <img src={logoIcon} alt="Logo" width={63}/> 
              <span>COVID 19</span>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Overview</a></li>
              <li><a href="#about">Contagion</a></li>
              <li><a href="#services">Symptoms</a></li>
              <li><a href="#contact">Prevention</a></li>
              <li><a href="#contact">Treatment</a></li>
            </ul>
            <div className="social-media">
              <img src={fb} alt="" />
              <img src={youtube} alt="" />
              <img src={vimeo} alt="" />
              <img src={twitter} alt="" />
            </div>
          </nav>
          <img src={footer} alt="" className='bg-img'/>
          <p className='rights-text'>2020 @ All rights reserved by pixelspark.co</p>
        </footer>
    )
}