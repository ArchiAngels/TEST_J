import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

import Like from '../../media/like.svg';
import Arrow_down from '../../media/arrow_down.svg';
import Basket from '../../media/basket.svg';
import User_1 from '../../media/user/head.svg';
import User_2 from '../../media/user/body.svg';

function NavBar(){
    return <>
        <div className='NavBar_container'>
            <nav className='NavBar_content' >
                <p className='logo'>logo</p>
                <ul className='Ul_links'>
                    <li>
                        <p>Categories</p>
                    </li>
                    <li className='li_left_50'>
                        <p>Payment</p>
                    </li>
                    <li className='li_left_50'>
                        <p>Warranty</p>
                    </li>
                    <li className='li_left_50'>
                        <p>Credit</p>
                    </li>
                    <li className='li_last'>
                        <p>Catalog <img src={Arrow_down} alt='Arrow icon'></img></p>
                    </li>
                </ul>
                <div className='links_icon'>
                    <img src={Like}></img>
                    <Link to='/basket'><img src={Basket} alt='Basket icon'></img></Link>
                    <div className='link_user'>
                        <img src={User_1} className='head' alt='Head of user icon'></img>
                        <img src={User_2} className='body' alt='Body of user icon'></img>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default NavBar;