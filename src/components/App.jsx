import React from 'react'
import {BrowserRouter as Router } from "react-router-dom";
// import {useStore} from 'react-redux';
import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer/Footer.jsx';
import Switch from './Router/Switch.jsx';

function App(){
    return <>
        <Router>
            <NavBar></NavBar>
            <Switch></Switch>
        </Router>
        
        {/* CurrentPage */}
        <Footer></Footer>
    </>
}
export default App;