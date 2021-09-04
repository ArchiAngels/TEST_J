import React from "react";
import './PriceAndLike.scss';

import Like from '../../media/Product/like.svg';

function PriceAndLike(props){
    return <>
        <div className="PriceAndLike__wrap">
            
            <div className="PriceAndLike__left__part">
            <p className='PriceAndLike__name'>{props.name}</p>
            <p className='PriceAndLike__price'>{props.price}</p>
            </div>
            <div className="PriceAndLike__right__part">
                <span className='PriceAndLike__date__span'>Added:</span>
                <p className='PriceAndLike__date'>{props.date}</p>
                <img className='PriceAndLike__img' src={Like} alt="Like icon" />
            </div>
        </div>
    </>
}

export default PriceAndLike;