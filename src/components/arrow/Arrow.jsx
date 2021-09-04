import React from "react";
import './Arrow.scss';

import ArrowIcon from'../../media/Product/arrowLeft.svg';

function Arrow(props){
    return <>
        <div className="Arrow">
            <img src={ArrowIcon} alt="Arrow icon" style={{transform:`rotate(${props.deg}deg)`}}/>
        </div>
    </>
}

export default Arrow;