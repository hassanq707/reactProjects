import React, {useState } from "react";
import { Custom_Button } from "./components/Custom_Button";
import Aesehe from './components/Aesehe'
import Input_Field from "./components/Input_Field";
import { FaLinesLeaning } from "react-icons/fa6";


/////////////////////////////////////

const App = () => {

  const[input,setInput] = useState('')
  const[toggle,setToggle] = useState(false)


  // **************  1 method

  // const handleClick = (name) => {

  //   setToggle(!toggle) 
  //                      // async state changed hone ki wajha se dosra
  //                      // kaam karega yani conditon check karega first/
  //                      // isi wajha se toggle first me nhi horaha
  //   if(!toggle){
  //     setInput(name)
  //     }
  //     else{
  //       setInput('')
  //     }
      
  // };



  // **************  2 method
  // const handleClick = (name) => {
  //   setToggle((prevToggle) => {
  //     const newToggle = !prevToggle; // Flip the previous toggle state
  //     if (newToggle) {
  //       setInput(name); // If newToggle is true, set input to name
  //     } else {
  //       setInput(''); // If newToggle is false, clear the input
  //     }
  //     return newToggle; // Return the new state to update toggle
  //   });
    
  // };



  return <>
    <h1>Hassan Qadri is the best</h1>
    <Custom_Button onClick={() => handleClick("hassan")}>
      Click here
     </Custom_Button>
     <br />
     <Input_Field 
     type="text"
     placeholder="Enter name"
     readOnly
     value={input}
     />
  </>
};






export default App;
