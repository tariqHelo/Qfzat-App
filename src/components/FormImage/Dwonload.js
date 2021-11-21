import React from 'react';
import logo from './images/Logo-icon.png';
import Qfzat from './images/Logo-Qfzat.png';
import card from './images/Your-card-ready.png';
import { MY_Storage } from  "../../config"

import { useSelector } from 'react-redux';

const Dwonload = () => {
   let MyStorage = MY_Storage
   const id = useSelector(state => state.photo.response);
   const source = `${MyStorage}/${id}`;
   console.log(id);
        return(
          <div className="wrapper">
                <header>
                <div className="page-number">
                    <h4>Page 4</h4>
                </div>
                <div className="logo">
                    <img src={logo} alt="Qfzat Logo"/>
                </div>
                </header>

                <div className="logo-holder">
                <img src={Qfzat} alt="Logo"/>
                </div>

                <div className="icon-holder">
                <img src={card} height="40" alt="Your card is ready!"/>
                </div>

                <div className="inputs-holder">
                <div className="buttons">
                    <a href={source} target='_blank' rel="noreferrer" className="btn btn-lg" >Download</a>
                </div>
                </div>
            </div>  
        )
    
}
export default Dwonload
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

