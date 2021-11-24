import React , {useState} from "react";
import logo from './images/Logo-icon.png';
import Qfzat from './images/Logo-Qfzat.png';
import { MY_API_URL } from  "../../config"

import { useHistory , useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios  from "axios";

const Name = () => {
 
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { id } = useParams()
    
    React.useEffect(() => {
    console.log("name : ", name);
    }, [name]);
    

   
   const submitForm = (e) =>{
    e.preventDefault();
   let url  = `${MY_API_URL}/${id}`
    const data = {
      name: name,
     }
    axios
      .patch(url, data, {
        headers: {
          'accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((response) => {
        // successfully uploaded response
        console.log(response);
        if(response.status === 200){
           const { data } = response;
           dispatch({ type: "success", id: data.id }); 
           history.push("/Dwonload", { data })
        }
      })
      .catch(error => {
            setErrorMessage("You Should Write Your Name in English!")
             console.log("Error ========>", error);
      });
 }

   return(
        <form onSubmit={submitForm} className="wrapper">
            <header>
            <div className="page-number">
                <h4>Page 3</h4>
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
            
            <div className="inputs-holder">
            <div method="post">
                <div className="input-btn">
                <button>Name</button>
                <input name="name" required type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="buttons">
                <button type="submit" class="btn btn-lg">Get your card</button>
                </div>
                <div className="buttons">
                 {errorMessage && <div class="alert alert-danger" role="alert"> {errorMessage} </div>}
                </div>
            </div>
            </div>
        </form>    
    ) 
}
export default Name
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

