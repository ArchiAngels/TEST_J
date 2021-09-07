import React from "react";
import './Opinion.scss';

import Arrow from "../../components/arrow/Arrow.jsx";
import Star from '../../components/Star/Star.jsx';

let opinios_arr = [
    {
        author:'Martha Schmidt',
        stars:4,
        date:'05.08.2021',
        text:'The pear chair is a kind of frameless furniture. This is  a pear-shaped bag chair, which can be for children and  adults. The product consists of two covers (internal and  external), as well as a filler. Among professionals, it is  called bin bag.'
    },
    {
        author:'Martha Schmidt',
        stars:4,
        date:'05.08.2021',
        text:'The pear chair is a kind of frameless furniture. This is  a pear-shaped bag chair, which can be for children and  adults. The product consists of two covers (internal and  external), as well as a filler. Among professionals, it is  called bin bag.'
    }
]
function Opinios(props){
    function GetStars(number){
        let arr_star = [];
        for(let i = 1; i <= 5; i++){
            if(i <= number){
                arr_star.push(1);
            }else{
                arr_star.push(0)
            }
        }
        console.log(arr_star)
        return arr_star;
    }
    return <>
        <div className="OpinionCard">
            <div className="OpinionCard__top">
                <div className="OpinionCard__top__left">
                    <p>{props.author}</p>
                </div>
                <div className="OpinionCard__top__right">
                    <span>{props.date}</span>
                    <div className="OpinionCard__stars">
                        {GetStars(props.stars).map((e,i)=>{
                            return <Star key={i} size={14} fill={e}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="OpinionCard__bottom">
                <p>{props.text}</p>
            </div>
        </div>
    </>
}
function Opinion(props){
    let showArrows = opinios_arr.length > 1;

    

    return <>
        <div className="opinion">
            {showArrows?
                <div className="Opinion__top__left">
                    <Arrow/>
                </div> : ''}
            
            <div className="Opinion__top_middle">
                {opinios_arr.map((e,i)=>{
                    console.log(e,i);
                    return <Opinios key = {i} author={e.author} stars={e.stars} date={e.date} text={e.text}/>
                    
                })}
            </div>
            {showArrows?
                <div className="Opinion__top_right">
                    <Arrow deg={180}/>
                </div> : ''}
        </div>
    </>
}

export default Opinion;