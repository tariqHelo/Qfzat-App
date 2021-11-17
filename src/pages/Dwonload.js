import React from 'react';
import logo from './Logo-icon.png';
import Qfzat from './Logo-Qfzat.png';
import card from './Your-card-ready.png';
import { useSelector } from 'react-redux';

const Dwonload = () => {
  
   const id = useSelector(state => state.photo.response);
   const source = `http://127.0.0.1:8000/uploads/${id}`;
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
                    <a href={source} target='_blank' className="btn btn-lg" >Download</a>
                </div>
                </div>
            </div>  
        )
    
}
export default Dwonload
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

