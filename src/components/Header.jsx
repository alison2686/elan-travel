import React from 'react';
// import { link } from 'react-router-dom';
import background from '../images/travel_background.jpg';
import logo from '../images/elan_logo_black_background.png';
import '../css/Header.scss'
 
const Header = () => {
    return(
        <div class='header' style={{ backgroundImage: `url(${background})` }}>
            <div className='logo-container'>
                <img src={logo} alt='Elan Travel Services'/>
            </div>
            <ul className="nav">
                <li className="nav-logo">Elan Travel</li>
                {/* <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Header;