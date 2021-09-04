import React from "react";
import './Photo.scss';

import Couch from '../../media/Product/couch.jpg';

function Photo(props){
    return <>
        <div className="Photo__wrap">
            <img src={Couch} alt="Couch img" width='80px' height='80px' style={{transform:`scaleX(${props.right?"-1":"1"})`}}/>
        </div>
    </>
}
export default Photo;