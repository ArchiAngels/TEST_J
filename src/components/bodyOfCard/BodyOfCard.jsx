import React from "react";
import './BodyOfCard.scss';

import Couch from '../../media/Product/couch.jpg';

function BodyOfCard(props){
    return <>
        <div className="BodyOfCard__container">
            <div className="BodyOfCard__img">
                <img src={Couch} alt="Picture of select item" />
            </div>
            <div className="BodyOfCard__info">
                <h3 className='info__name'>{props.Name}</h3>
                <p className='info__newPrice'>{props.NewPrice}</p>
                <p className='info__oldPrice'>{props.OldPrice}</p>
            </div>
        </div>
    </>
}

export default BodyOfCard;