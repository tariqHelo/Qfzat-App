import React from 'react';
import logo from './Logo-icon.png';
import Qfzat from './Logo-Qfzat.png';


class Link extends React.Component {
  
    render() {
        return (
            <div className="wrapper">
                <header>
                <div className="page-number">
                    <h4>Page 2</h4>
                </div>
                <div className="logo">
                    <img src="images/Logo-icon.png" alt="Qfzat Logo" />
                </div>
                </header>

                <div className="logo-holder">
                <img src={logo} alt="Logo" />
                </div>

                <div className="icon-holder">
                <img src={Qfzat} height="40" alt="Your link is ready!" />
                </div>

                <div className="inputs-holder">
                <div className="inputs">
                    <input type="text" value="https://your-link-is-here.com" className="py-4" />
                </div>
                <div className="buttons">
                    <button className="btn">Copy</button>
                    <button className="btn">Share</button>
                </div>
                </div>
            </div>
        )
    }  
}
export default Link

// sendForm -> backend -> response -> save data to redux -> display  data from redux 

