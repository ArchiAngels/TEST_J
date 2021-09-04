import React,{useState} from "react";
import './ProductPrice.scss';

import SuccesIcon from '../../media/Product/sucses.jpg';

function YourChoose(props){
    let [select,setSelect] = useState();
    function HandleClick(e){
        console.log('CLICKED::',e);
    }
    return <>
        <div>
            <p>{props.text}:</p>
            {props.methods.map((i,index) =>{
                return <div key={'id'+index} onClick={HandleClick}>
                    <div className="select__wrap"></div>
                    <p>{i}</p>
                </div>
            })}
        </div>
    </>
}

function ProductPrice(){
    return <>
        <div className="ProductPrice__container">
            <p className="ProductPrice__title">Product price</p>
            <div className="ProductPrice__choose__payment">
                <YourChoose text={'Payment method'} methods={['Cash','Credit','Certificate']}/>
            </div>
            <div className="ProductPrice__choose_delivery">
                <p>Delivery service:</p>
            </div>
            <div className="ProductPrice__buttons">

            </div>
        </div>
    </>
}

export default ProductPrice;