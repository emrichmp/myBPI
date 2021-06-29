import React from 'react';
import logo from './logo-flower.png'

class Header extends React.Component {
    render(){
        return(
            <div>
                <img src={logo} alt="" />
                <a href="https://www.vian.ai/contact-us/">Contact Us</a>
            </div>
        )
    }
}

export default Header;