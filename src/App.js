import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light');  //tells whether dark mode is on or off
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text here to analyze" mode={mode}/>
      {/*<About/>*/}
    </>
  );
}

export default App;