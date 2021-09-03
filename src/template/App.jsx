import React from 'react'
import {BrowserRouter as Router } from "react-router-dom";
// import {useStore} from 'react-redux';
import Switch from './Router/Switch.jsx';

function App(){
    return <>
        <Router>
            <Switch></Switch>
        </Router>
    </>
}
export default App;