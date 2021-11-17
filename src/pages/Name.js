import React , {useState} from "react";
import logo from './Logo-icon.png';
import Qfzat from './Logo-Qfzat.png';
import { useHistory , useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios  from "axios";

const Name = () => {
 
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    
    const { id } = useParams()
    
    React.useEffect(() => {
    console.log("name : ", name);
    }, [name]);

   const submitForm = (e) =>{
    e.preventDefault();

    const data = {
      name: name,
     }

    axios
      .patch(`http://127.0.0.1:8000/api/image/${id}`, data, {
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
            <img src={Qfzat} alt="Qfzat"/>
            </div>

            <div className="inputs-holder">
            <div method="post">
                <div className="input-btn">
                <button>Name</button>
                <input name="name" type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="buttons">
                <button type="submit" class="btn btn-lg">Get your card</button>
                </div>
            </div>
            </div>
        </form>    
    ) 
}
export default Name
// sendForm -> backend -> response -> save data to redux -> display  data from redux 

