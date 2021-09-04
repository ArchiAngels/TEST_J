import React from 'react';
import './Card.scss';

import Arrow from '../arrow/Arrow.jsx';
import BodyOfCard from '../bodyOfCard/BodyOfCard.jsx';

import Star from '../../media/Product/rate.svg';

function Card(){
    return <>
        <div className="Card__container">
            <div className="card__content">
                <div className="card__top">
                    <div className="top__left">
                        <img src={Star} alt="Star icon" />
                        <div className="left__text">
                            <p>4.5</p>
                            <span className='left__stick'></span>
                            <p>10</p>
                            <span className='opacityWhite'>Customer reviews</span>
                        </div>
                        
                    </div>
                    <div className="top__right">
                        <div className="right__text">
                            <span className='opacityWhite'>Product code</span>
                            <p>555555</p>
                        </div>
                        
                    </div>
                </div>
                <div className="card__middle">
                    <BodyOfCard Name={'Pear chair'} NewPrice={'599.00'} OldPrice={'699.99'}/>
                </div>
                <div className="card__bottom">
                        <Arrow deg={0}/>
                        <Arrow deg={180}/>
                </div>
            </div>
        </div>
    </>
}

export default Card;