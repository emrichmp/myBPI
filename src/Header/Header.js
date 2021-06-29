import React from 'react';
import logo from './logo-flower.png'
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="" />
                <a className="contact" href="https://www.vian.ai/contact-us/">Contact Us</a>
                <small className="coindesk">Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></small>
            </div>
        )
    }
}

export default Header;