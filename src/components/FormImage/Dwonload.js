import React from 'react';
import logo from './images/Logo-icon.png';
import Qfzat from './images/Logo-Qfzat.png';
import card from './images/Your-card-ready.png';
import { MY_Storage } from  "../../config"
import { useHistory} from "react-router-dom";

import { useSelector } from 'react-redux';

const Dwonload = () => {
    
   const history = useHistory();
   let MyStorage = MY_Storage
   const id = useSelector(state => state.photo.response);
   const source = `${MyStorage}/${id}`;
   const routeChange = () =>{ 
      history.push('/');
    }
   console.log(id);
        return(
          <div className="wrapper">
                <header>
                <div className="page-number">
                </div>
                <div className="logo">
                    <img src={logo} alt="Qfzat Logo"/>
                </div>
                </header>

                <div className="logo-holder">
                 <a rel="noreferrer" href='https://WWw.Qfzat.com' target="_blank">
                   <img src={Qfzat} alt="Qfzat"/>
                 </a> 
                </div>

                <div className="icon-holder">
                <img src={card} height="40" alt="Your card is ready!"/>
                </div>

                <div className="inputs-holder">
                    <div className="buttons">
                        <a href={source}  target='_blank' rel="noreferrer" class="btn btn-lg">Download</a>
                    </div>
                </div>

                <div className="buttons">
                    <h4>if you want to create your own link you can <span  onClick={routeChange} focus>click here </span></h4>
                </div>
                <div className="buttons">
                  <span>WWW.Qfzat.com</span>
                </div>
            </div>  
        )
    
}
export default Dwonload
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

