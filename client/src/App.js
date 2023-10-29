import React, {useEffect, useState} from 'react'
import {Login} from './Login';
import {Register} from './Register';
import { Homepage } from './Homepage';
import ReactGA from "react-ga4";
import './App.css';

function App() {
    const [currentForm, setCurrentForm] = useState('login');
  const TRACKING_ID = "G-GMVY4B99CC";// tracking id for GA
  ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Login" });

    },[]);
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            <img className="homepage-logo" referrerPolicy="no-referrer"
                 src={process.env.PUBLIC_URL + "/infinity-travel-logo.png"} height="80px" width="120px"/>
            {currentForm === "login" ? ( <Login onFormSwitch={toggleForm} />) 
            : currentForm === "register" ? (<Register onFormSwitch={toggleForm} />) 
            : currentForm === "homepage" ? (<Homepage onFormSwitch={toggleForm} />) : null}
        </div>
    )
}

export default App