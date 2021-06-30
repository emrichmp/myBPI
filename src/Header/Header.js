import React from 'react';
import logo from './logo-flower.png'
import './Header.css';

class Header extends React.Component {
    //Created header to look very similar to Vianai website, contact link leads to Vianai, disclaimer is required for utilization of coindesk
    //Vianai Logo was pulled from website
    render(){
        return(
            <div>
                <img className="logo" src={logo} alt="" />
                <a className="contact" href="https://www.vian.ai/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a>
                <small className="coindesk">Powered by <a href="https://www.coindesk.com/price/bitcoin" target="_blank" rel="noopener noreferrer" >CoinDesk</a></small>
            </div>
        )
    }
}

export default Header;