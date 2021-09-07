import React from "react";
import './RecommendProduct.scss';

import Arrow from "../arrow/Arrow.jsx";
import Watches from '../../media/Accesories/watches.jpg';

let products = [
    {
        discount:'20%',
        newPrice:'199.99',
        oldPrice:'269.00',
        Category:'Watch',
        BrandName:'Mi',
        imgSource:Watches
    }
]

function RecomCard(props){
    return <>
        <div className="RecomCard__container">
            <div className="RecomCard__discount__wrap">
                <div className="RecomCard__discount">
                    <p>${props.dscnt}</p>
                </div>
            </div>
            <div className="RecomCard__img__wrap">
                <img src={props.img} alt="Product image" />
            </div>
            <div className="RecomCard__title__wrap">
                <div className="RecomCard__title__top">
                    <p>{props.cat}</p>
                    <p>{props.nP}</p>
                </div>
                <div className="RecomCard__title__bottom">
                    <p>{props.brdnm}</p>
                    <p className='RecomCard__oldPrice'>{props.oP}</p>
                </div>
            </div>
        </div>
    </>
}

function RecommendProduct(props){

    function getProductCards(number){

        let arr = [];

        for(let i =0; i < number;i++){
            arr.push(products[0])
        }

        return arr;
    }

    return <>
    
        <div className="RecommendProduct__container">
            <div className="RecommendProduct__top">
                <h3>{props.title}</h3>
                <div className="RecommendProduct__change_arrows">
                    <Arrow />
                    <Arrow deg={180}/>
                </div>
            </div>
            <div className="RecommendProduct__bottom">
                {getProductCards(4).map((e,i)=>{
                    return <RecomCard key ={i} nP={e.newPrice} oP={e.oldPrice} cat={e.Category} brdnm={e.BrandName} dscnt={e.discount} img={e.imgSource}/>
                })}
            </div>
        </div>
    </>
}


export default RecommendProduct;