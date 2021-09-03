import React from 'react';
import './Footer.scss';

import Phone from '../../media/phone-i.svg';

import Mail_top from '../../media/mail-top.svg';
import Mail_bottom from '../../media/mail-bottom.svg';

import Map from '../../media/map-i.svg';

import Fb from '../../media/f-i.svg';

import Inst_border from '../../media/in-b-i.svg';
import Inst_circl from '../../media/in-ci-i.svg';
import Inst_point from '../../media/in-p-i.svg';

import Google_g from '../../media/g-i.svg';
import Google_p from '../../media/g-p.svg'

import Twitter from '../../media/tw-i.svg'

function Footer(){
    return <>
        <div className='Footer_container'>
            <footer className='Footer_content'>
                <ul className='Footer_ul'>
                    <li>
                        <h3>contacts</h3>
                        <ul className='ul_category'>
                            <li>
                                <div className='icon_wrap'>
                                    <img src={Phone} alt="Phone icon" />
                                </div>
                                <a href="tel:+1-123-444-33-22">1 (123) 444 33 22</a>
                            </li>
                            <li>
                                <div className='Mail_icon icon_wrap'>
                                    <img src={Mail_top} alt="Mail part icon" />
                                    <img src={Mail_bottom} alt="Mail part icon" />
                                </div>
                                <a 
                                href='mailto:collection.@info.com'
                                // style={{textTransform:"none"}}

                                >collection.@info.com</a>
                            </li>
                            <li>
                                <div className='icon_wrap'>
                                    <img src={Map} alt="Map icon" />
                                </div>
                                <a 
                                href='#map'
                                    // style={{textTransform:"none"}}
                                >ua. nicolaev st.lenina 123</a>
                            </li>
                            <li>
                                <div className="SocialNetworks">
                                    <div className="icon_wrap">
                                        <img src={Fb} alt="Facebook icon" />
                                    </div>
                                    <div className="icon_wrap customIcon instagram">
                                        <img src={Inst_border} alt="Instagram part icon" />
                                        <img src={Inst_circl} alt="Instagram part icon" />
                                        <img src={Inst_point} alt="Instagram part icon" />
                                    </div>
                                    <div className="icon_wrap">
                                        <img src={Twitter} alt="Twitter icon" />
                                    </div>
                                    <div className="icon_wrap customIcon google">
                                        <img src={Google_g} alt="Google plus icon" />
                                        <img src={Google_p} alt="Google plus icon" />
                                    </div>
                                    
                                    
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>information</h3>
                        <ul className='ul_category'>
                            <li>
                                <p>about us</p>
                            </li>
                            <li>
                                <p>our history</p>
                            </li>
                            <li>
                                <p>contacts</p>
                            </li>
                            <li>
                                <p>delivery info</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>shop</h3>
                        <ul className='ul_category'>
                            <li>
                                <p>oxford</p>
                            </li>
                            <li>
                                <p>on laces</p>
                            </li>
                            <li>
                                <p>without laces</p>
                            </li>
                            <li>
                                <p>stock</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>account</h3>
                        <ul className='ul_category'>
                            <li>
                                <p>my account</p>
                            </li>
                            <li>
                                <p>wish list</p>
                            </li>
                            <li>
                                <p>newsletter</p>
                            </li>
                            <li>
                                <p>my order</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </div>
    </>
}

export default Footer;