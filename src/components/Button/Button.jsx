import React from "react";
import './Button.scss';

function Button(props){

    function HandlerClick(e){
        console.log("Clicked button  "+props.title);
        e();
    }
    return <>
        <div className={`Button__container ${props.theme}`} onClick={()=>{HandlerClick(props.action)}}>
            <p>{props.title}</p>
        </div>
    </>
}

export default Button;