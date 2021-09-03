import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

import Like from '../../media/nav/like.svg';
import Arrow_down from '../../media/nav/arrow_down.svg';
import Basket from '../../media/nav/basket.svg';
import User_1 from '../../media/nav/user/head.svg';
import User_2 from '../../media/nav/user/body.svg';

import ArrowRight from '../../media/nav/arrow-right.svg';
import Search from '../../media/nav/search.svg';
import Delivery from '../../media/nav/deliver.svg';

function NavBar(){
    return <>
        <div className='NavBar_container'>
            <div className="NavBar_wrap">
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

            <div className="NavBar_content down_navbar">
                <div className="HistoryOfAppWrap">
                    <span>home</span>
                        <img src={ArrowRight} alt="Arrow right icon" />
                    <span>categories</span>
                        <img src={ArrowRight} alt="Arrow right icon" />
                    <p>{window.location.pathname.slice(1)}</p>
                </div>

                <div className="InputWrap">
                    <input type="text" placeholder='product name' />
                    <img src={Search} alt="Search icon" />
                </div>

                <div className="DeliveryWrap">
                    <span>delivery service</span>
                    <img src={Delivery} alt="Delivery icon" />
                </div>
            </div>
        </div>
    </>
}

export default NavBar;