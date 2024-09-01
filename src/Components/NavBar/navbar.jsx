import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImag from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
     <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="deskpotMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-90} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-80} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-60} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='Client' spy={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImag} alt="" className="desktopMenuImg" />
            Contact Me
        </button>
     </nav>
  )
}

export default Navbar
