import React , {useState} from "react";
import axios  from "axios";
import Color  from "./Color";

import logo from './Logo-icon.png';
import drop from './drag-drop.png';

import { useHistory } from "react-router-dom";

// import FileUploader from './FileUploader';
const Inputs = () => {
  const history = useHistory();
 
  const [photosize, setSelectedPhotoSize] = useState('');
  const [location, setSelectedlocation] = useState('');
  const [font_type, setSelectedFontType] = useState('');
  const [uploadFile, setUploadFile]= useState('');

  React.useEffect(() => {
  console.log("new photo size: ", photosize);
   }, [photosize]);

   React.useEffect(() => {
   console.log("new photo location: ", location);
   }, [location]);
    
  React.useEffect(() => {
  console.log("new photo font: ", font_type);
   }, [font_type]);
  
  const fileChangeHandler = (e) =>{
      setUploadFile(e.target.value)
      console.log(uploadFile);
  }
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

    const dataArray = new FormData()
    dataArray.append("image", uploadFile);
    dataArray.append("size_photo", photosize);
    dataArray.append("location", location);
    dataArray.append("font_type", font_type);
    dataArray.append("text_color", "red");
    

    axios
      .post("http://127.0.0.1:8000/api/image", dataArray, {
        headers: {
          'accept': 'application/json',
          "Access-Control-Allow-Origin" : "http://localhost:3000",
          "Content-Type": "multipart/form-data",
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      })
      .then((response) => {
        // successfully uploaded response
        console.log(response);
        const { data } = response;
        history.push("/link", { data })

      })
      .catch(error => {
            console.log("Error ========>", error);
      });
      console.log(dataArray);
 }
    return (
      <form onSubmit={submitForm} className="wrapper">
          <header>
            <div className="page-number">
              <h4>Page 1</h4>
            </div>
            <div className="logo">
              <img src={logo} alt="Qfzat Logo"/>
            </div>
          </header>

          <div className="icon-holder bordered">
            <img src={drop} width="175" alt="Upload a file" />
              <div className="boxborder-me">
               <input type="file" className="btn btn-light"
                    name="imageFile"
                    value={uploadFile}
                    onChange={fileChangeHandler}
                    placeholder="Select File"/>
              </div>
          </div>
          <div className="inputs-holder">
              <div className="inputs-holder">
                <div className="inputs">
                  <select    
                   value={photosize} 
                   onChange={photoSizeChangeHandler}
                   required
                    >
                    <option value="photo-size">Photo size <img src="http://placehold.it/50x50/f00" alt=""/></option>
                    <option value="snapChat">snapchat</option>
                    <option value="inst">inst</option>
                    <option value="whatsApp">whatsapp</option>
                  </select>
                  <select     
                   value={location} 
                   onChange={locationChangeHandler} 
                   >
                    <option value="location">Location</option>
                    <option value="top">Top</option>
                    <option value="center">Center</option>
                    <option value="bottom">Bootom</option>
                  </select>
                  <select     
                    value={font_type} 
                    onChange={fontTypeChangeHandler} 
                    >
                    <option value="font-type">Font type</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Tajawal">Tajwal</option>
                    <option value="Fredoka">Fredoka</option>
                  </select>
                   <Color></Color>
                  <select    
                  //  value={this.state.selectValue} 
                  //   onChange={this.handleChange} 
                    >
                    <option value="Defualt-Text">Defualt Text</option>
                  </select>
           
      
                </div>
                
            <div className="buttons">
              <button type="submit" className="btn">Create link</button>
            </div>
          </div>
        </div>
    </form>
    );
  }
export default Inputs;




//  const  getInitialState = (selectValue) => {
//     return { selectValue };
//     // console.log(selectValue)
//   };
//  const handleChange = (e) => {
//     console.log({selectValue: e.target.value})
//     this.setState({ selectValue: e.target.value });
//   };