import React from "react";
import './Specification.scss';

function ColorCube(props){
    return <>
        <div style = {{width:'28px',height:"28px",background:`${props.color}`}}></div>
    </>
}

function Specification(){
    return <>
        <div className="Specification__container">
            <p className='Specification__title p10'>Specifications:</p>
            <p className='Specification__content'>The pear chair is a kind of frameless furniture. This is a pear-shaped bag chair, which can be for children and adults. The product consists of two covers (internal and external), as well as a filler. Among professionals, it is called bin bag.</p>
            <p className='Specification__title p13 '>Colors:</p>
            <div className="Specification__colors">
                <ColorCube color={'#76B0CC'}/>
                <ColorCube color={'#328863'}/>
                <ColorCube color={'#324688'}/>
                <ColorCube color={'#883271'}/>
            </div>
        </div>
    </>
}

export default Specification;