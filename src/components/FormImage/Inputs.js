import React , {useState} from "react";
import axios  from "axios";
import { useDispatch } from "react-redux";
import { MY_API_URL } from  "../../config"
import Color  from "./Color";
import logo from './images/Logo-icon.png';
import drop from './images/drag-drop.png';
import { useHistory } from "react-router-dom";

// import FileUploader from './FileUploader';
const Inputs = (props) => {
  
  
  const history = useHistory();
  const dispatch = useDispatch();
  const [photosize, setSelectedPhotoSize] = useState('');
  const [location, setSelectedlocation] = useState('');
  const [font_type, setSelectedFontType] = useState('');
  const [uploadFile, setUploadFile] = React.useState();
  const [color, setColor] = useState('');

  
  const changeColor = (c) => {
    console.log(c)
      setColor(c);
    };

  React.useEffect(() => {
  console.log("new photo size: ", photosize);
   }, [photosize]);

   React.useEffect(() => {
   console.log("new photo location: ", location);
   }, [location]);
    
  React.useEffect(() => {
  console.log("new photo font: ", font_type);
   }, [font_type]);
   

  const photoSizeChangeHandler = (e) =>{
    setSelectedPhotoSize(e.target.value)
   console.log(photosize);
 }
  const locationChangeHandler = (e) =>{
    setSelectedlocation(e.target.value)
    console.log(location);
 }
  const fontTypeChangeHandler = (e) =>{
    setSelectedFontType(e.target.value)
    console.log(font_type);
 }
  
 const submitForm = (e) =>{
   e.preventDefault();
   let url  = MY_API_URL
    const dataArray = new FormData()
    dataArray.append("size_photo", photosize);
    dataArray.append("postion", location);
    dataArray.append("font_type", font_type);
    dataArray.append("text_color", color);
    dataArray.append("image", uploadFile);

    axios
      .post(url, dataArray, {
        headers: {
          'accept': 'application/json',
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((response) => {
        // successfully uploaded response
        console.log(response);
        if(response.status === 200){
           const { data } = response;
           dispatch({ type: "success", id: data.id }); 
           history.push("/link", { data })
        }
      })
      .catch(error => {
            console.log("Error ========>", error);
      });
 }
    return (
      
      <form onSubmit={submitForm} className="wrapper">
          <header>
            <div>
            </div>
            <div className="logo">
             <a rel="noreferrer" href='https://WWw.Qfzat.com' target="_blank">
               <img src={logo}   alt="Qfzat Logo"/>
            </a> 
            </div>
          </header>

          <div className="icon-holder bordered">
            <img src={drop} width="175" alt="Upload a file" />
              <div className="boxborder-me">
               <input type="file" className="btn btn-light"
                    name="image"
                    required
                    onChange={(e) => setUploadFile(e.target.files[0])}
                    placeholder="Select File"/>
              </div>
          </div>
              <div className="inputs-holder">
                <div className="inputs" id="gender">
                  <select
                    required
                   value={photosize} 
                   onChange={photoSizeChangeHandler}
                    >
                    <option value="">Photo size</option>
                    <option value="snapchat">snapchat</option>
                    <option value="whatsapp">whatsapp</option>
                    <option value="inst">inst</option>
                  </select>
                  
                  <select
                  required     
                   value={location} 
                   onChange={locationChangeHandler} 
                   >
                    <option value="">Location</option>
                    <option value="Top">Top</option>
                    <option value="Center">Center</option>
                    <option value="Bottom">Bootom</option>
                  </select>
                  <select
                  required     
                    value={font_type} 
                    onChange={fontTypeChangeHandler} 
                    >
                    <option value="">Font type</option>
                    <option value="Cairo-SemiBold">Cairo</option>
                    <option value="Tajawal-Medium">Tajwal</option>
                    <option value="FredokaOne-Regular">Fredoka</option>
                    <option value="Arabic-Medium">Arabic Medium</option>
                    <option value="Bahij_TheSansArabic-Bold">Bahij TheSansArabic-Bold</option>
                  </select>
                   <Color changeColor={changeColor}/>
                
                </div>
                
            <div className="buttons">
              <button type="submit" className="btn">Create link</button>
            </div>
          </div>
    </form>
    );
  }
export default Inputs;