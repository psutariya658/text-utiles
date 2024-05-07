/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';//style mate app.css vali file use ker vani
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  // wether dark mode is enabled or not
  const [darkMode, setDarkMode] = useState('light');
  //alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const switchMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#90a7ab';
      showAlert("Light mode has been changed to dark", "success");
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'ghostwhite';
      showAlert("Dark mode has been changed to light", "success");
    }
  }

  return (

    //router satthe connect ker va mate
    <Router>
      <div className="container">
        {/* navbar import keri lidhu */}
        <Navbar title="TextUtils" toggleMode={switchMode} about="About Us" mode={darkMode} />
        {/* alert formate */}
        <Alert alert={alert} />

        <Routes>
          {/* about formate */}
          <Route exact path="/about" element={<About mode={darkMode} />} />

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={darkMode} />} />
        </Routes>
      </div>
    </Router>
    
    // simple layout
    //  <div className="container">
    // <Navbar title="TextUtils" toggleMode={switchMode} about="About Us" mode={darkMode} />
    // <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={darkMode} />
    // </div> 
  );
}


export default App;



