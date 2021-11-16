import React , {useState} from "react";
import logo from './Logo-icon.png';
import Qfzat from './Logo-Qfzat.png';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Name = () => {
 
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');


    React.useEffect(() => {
    console.log("new name value: ", name);
    }, [name]);


    const submitForm = (e) =>{
      e.preventDefault();
        fetch('/', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: {
            "msg": name
        }
     });
    };

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
            <div action="" method="post">
                <div className="input-btn">
                <button>Name</button>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
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

