import React from 'react';
import logo from './logo-flower.png'
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="" />
                <a className="contact" href="https://www.vian.ai/contact-us/">Contact Us</a>
            </div>
        )
    }
}

export default Header;