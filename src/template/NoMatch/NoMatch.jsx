import React from 'react';

import {Link} from "react-router-dom";
import './NoMatch.scss';

function NoMatch(){
    return <>
        <h4>NoMatch link</h4>
        <Link to='ProductCard'>Product card</Link>

    </>
}

export default NoMatch;