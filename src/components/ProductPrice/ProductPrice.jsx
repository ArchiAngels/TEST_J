import React,{useState} from "react";
import './ProductPrice.scss';

import SuccesIcon from '../../media/Product/sucses.jpg';

import Button from "../Button/Button.jsx";

let something = ()=>{console.log('INITED FUnction')};

function YourChoose(props){
    let [select,setSelect] = useState();
    function HandleClick(index,elem){
        console.log('CLICKED::',elem);
        setSelect(index);
    }
    return <>
        <div className='YourChoose'>
            <h3>{props.text}:</h3>
            <div className="choose">
                {props.methods.map((i,index,arr) =>{
                    let checkIndex = index != arr.length -1;
                    let checkMinLength = arr.length > 2;
                    return <div key={'id'+index} onClick={()=>{HandleClick(index,i)}} className='choose__wrap'>
                        <div className="select__wrap">
                            {select == index?
                                <img src={SuccesIcon} alt="Selected icon"/>:''
                            }
                        </div>
                        <p>{i}</p>
                        {checkIndex && checkMinLength? <span className='choose__stick'></span>:''}
                    </div>
                })}
            </div>
            
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
                <YourChoose text={'Delivery service'} methods={['Delivery','Self-export']}/>
            </div>
            <div className="ProductPrice__buttons">
                <Button title={'add to basket'} action={something} theme={0}/>
                <Button title={'Make an order'} action={something} theme={1}/>
            </div>
        </div>
    </>
}

export default ProductPrice;