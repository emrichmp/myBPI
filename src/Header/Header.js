import React from 'react';
//import logo from './logo-flower.png'
import logo from './Logo.png'
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    //Created header to look very similar to Vianai website, contact link leads to Vianai, disclaimer is required for utilization of coindesk
    //Links open new tab w/ "target="_blank"
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="" />
                <a className="contact" href="https://www.linkedin.com/in/emrich-michael-perrier/" target="_blank" rel="noopener noreferrer">Contact Me</a>
                <small className="coindesk">Powered by <a href="https://www.coindesk.com/price/bitcoin" target="_blank" rel="noopener noreferrer" >CoinDesk</a></small>
                <NavLink className="profile" to="/profile">Profile</NavLink>
                <NavLink className="home" to="/">Home</NavLink>
            </div>
        )
    }
}

export default Header;