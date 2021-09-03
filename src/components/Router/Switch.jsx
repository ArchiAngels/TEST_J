import React from 'react';
import {Switch,Route} from "react-router-dom";

import Product from '../Product/Product.jsx';
import Basket from '../Basket/Basket.jsx';
import NoMatch from '../NoMatch/NoMatch.jsx';


function mySwitch(){
    return <>
        <Switch>
            <Route exact path='/'>
                <Product />
            </Route>
            <Route exact path='/basket'>
                <Basket />
            </Route>
            <Route path='*'>
                <NoMatch />
            </Route>
        </Switch>
    </>
}

export default mySwitch;