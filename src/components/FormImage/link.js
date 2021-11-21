import React from 'react';
import logo from './images/Logo-icon.png';
import Qfzat from './images/Logo-Qfzat.png';
import ready from './images/your-link-is-ready.png';
import { useSelector } from 'react-redux';

 const Link = () => {
   
   const id = useSelector(state => state.photo.response);
   const path = `http://localhost:3000/Name/${id}`;

   console.log(id);
        return (
            <div className="wrapper">
                <header>
                <div className="page-number">
                    <h4>Page 2</h4>
                </div>
                <div className="logo">
                    <img src={logo} alt="Qfzat Logo" />
                </div>
                </header>

                <div className="logo-holder">
                <img src={Qfzat} alt="Logo" />
                </div>

                <div className="icon-holder">
                <img src={ready} height="40" alt="Your link is ready!" />
                </div>

                <div className="inputs-holder">
                <div className="inputs">
                    <input type="text" value={path} className="py-4"/>
                </div>
                <div className="buttons">
                    <button className="btn">Copy</button>
                    <button className="btn">Share</button>
                </div>
                </div>
            </div>
        )  
}
export default  Link 
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

