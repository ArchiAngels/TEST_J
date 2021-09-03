import React from 'react';
import './Product.scss';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';

function Product(){
    return <>
        <NavBar></NavBar>
        <div className='ProductCard_container'>
            <p>Product card</p>
        </div>
        <Footer></Footer>
    </>
}

export default Product;