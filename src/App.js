import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
import { useState } from 'react';
import About from './components/About.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('black');
  const [textform, setTextform] = useState('gray-800');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, // Fixing the case to match how it's used in Alert component
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('white');
      setTextform('white');
      showAlert("Dark mode has been enabled", "success");
      document.title='Sign Up-dark mode enabled';
    } else {
      setMode('light');
      setText('black');
      setTextform('gray-800');
      showAlert("Light mode has been enabled", "success");
      document.title='Sign Up-Light mode enabled';
    }
  };

  return (
    <>
    <Router>
     <Navbar
        home="Home"
        about="About"
        service="Service"
        contact="Contacts"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
    <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
         
        <Route exact path="/" element={<Textform mode={mode} textform={textform} showAlert={showAlert}/>}>
          
            
          </Route>
        </Routes>
      <Alert Alert={alert} />
      </Router>
     
      
      
    </>
  );
}

export default App;
