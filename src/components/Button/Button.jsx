import React from "react";
import './Button.scss';

function Button(props){

    function HandlerClick(e){
        console.log("Clicked button  "+props.title);
        e();
    }

    let themeStyle = ['themeFirst','themeSecond']
    return <>
        <div className={`Button__container ${themeStyle[props.theme]}`} onClick={()=>{props.action ? HandlerClick(props.action) : HandlerClick()}}>
            <p>{props.title}</p>
        </div>
    </>
}

export default Button;