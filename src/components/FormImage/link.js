import React, { useRef, useState } from 'react';
import logo from './images/Logo-icon.png';
import Qfzat from './images/Logo-Qfzat.png';
import ready from './images/your-link-is-ready.png';
import { useSelector } from 'react-redux';

 const Link = () => {
   
    const id = useSelector(state => state.photo.response);
    const path = `http://localhost:3000/Name/${id}`;
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);


    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

   console.log(id);
        return (
            <div className="wrapper">
                <header>
                <div className="page-number">
                    
                </div>
                <div className="logo">
                    <img src={logo} alt="Qfzat Logo" />
                </div>
                </header>
                 <div className="logo-holder">
                    <a rel="noreferrer" href='https://WWw.Qfzat.com' target="_blank">
                    <img src={Qfzat} alt="Qfzat"/>
                    </a> 
                </div>
                <div className="icon-holder">
                  <img src={ready} height="40" alt="Your link is ready!" />
                </div>

                <div className="inputs-holder">
                <div className="inputs">
                    <input type="text" 
                      ref={textAreaRef}
                      value='Some text to copy'
                      // eslint-disable-next-line react/jsx-no-duplicate-props
                      value={path}
                     className="py-4"/>
                </div>
                <div className="buttons">
                    <button onClick={copyToClipboard} className="btn">Copy</button>
                    <div>
                     {copySuccess}
                    </div>
                </div>
                </div>
            </div>
        )  
}
export default  Link 
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

