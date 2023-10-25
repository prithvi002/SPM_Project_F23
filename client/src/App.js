import React,{useEffect, useState} from 'react'
import { Login } from './Login';
import { Register } from './Register';
import './App.css';

function App()
{
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return(
    <div className = "App">
      <img className="homepage-logo" referrerPolicy="no-referrer" src={process.env.PUBLIC_URL + "/infinity-travel-logo.png"} height="80px" width="120px"/>
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
    }
    </div>
  )
}

export default App