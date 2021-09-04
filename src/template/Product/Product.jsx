import React from 'react';
import './Product.scss';


import Card from '../../components/card/Card.jsx';
import Photo from '../../components/Photos/Photo.jsx';
import PriceAndLike from '../../components/PriceAndLike/PriceAndLike.jsx';
import Specification from '../../components/Specification/Specification.jsx';
import ProductPrice from '../../components/ProductPrice/ProductPrice.jsx';


function Product(){
    return <>
        <div className='ProductCard_container'>
            <div className="productCard__content">
                <h3>Product</h3>
                <div className="__card_wrap">
                    <div className="productCard__left">
                        <Card/>
                        <div className="left__photos">
                            <Photo right={false}/>
                            <Photo right={true}/>
                            <Photo />
                        </div>
                    </div>
                    <div className="productCard__right">
                        <PriceAndLike name={'Pear chair'} price={'599.00'} date={'05.08.2021'}/>
                        <Specification/>
                        <ProductPrice/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default Product;