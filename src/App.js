import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import About from "./components/About"
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState("light");
  const[alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#272743';
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = "TextUtils - Dark Mode";
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>} />
        </Routes>
      </div> 
      </Router> 
    </>
  );
}

export default App;
