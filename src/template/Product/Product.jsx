import React from 'react';
import './Product.scss';


import Card from '../../components/card/Card.jsx';
import Photo from '../../components/Photos/Photo.jsx';
import PriceAndLike from '../../components/PriceAndLike/PriceAndLike.jsx';
import Specification from '../../components/Specification/Specification.jsx';
import ProductPrice from '../../components/ProductPrice/ProductPrice.jsx';
import RecommendProduct from '../../components/RecommendProduct/RecommendProduct.jsx';

import Button from '../../components/Button/Button.jsx';
import Opinion from '../Opinion/Opinion.jsx';

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
                <div className="productCard__content">
                    <h3>testimonials</h3>
                    <div className="__card_wrap testimonials">
                        <div className="testimonials__top">
                            <Opinion/>
                        </div>
                        <div className="testimonials__bottom">
                            <div className="testimonials__bottom_content">
                                <p className='testimonials__p'>
                                The pear chair is a kind of frameless furniture. This is a pear shaped bag chair, which can be for children and adults. The product consists of two covers.
                                </p>
                                <Button title={'leave a testimonial'} theme={1} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="productCard__content">
                    <RecommendProduct title='Accessories' />
                    
                </div>
            </div>
            
        </div>
    </>
}

export default Product;