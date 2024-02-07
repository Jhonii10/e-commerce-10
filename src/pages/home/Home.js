/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Slider } from '../../components';
import Product from '../../components/product/Product';

const Home = () => {

    const url = window.location.href;

    const scrollToProducts =  () =>{
        if (url.includes('/#productos')) {
                const productsElement = document.querySelector('.product');
                window.scrollTo({
                    top: productsElement.offsetTop,
                    behavior: 'smooth'
                });
            
        }
    }

    useEffect(() => {
        scrollToProducts()
    }, [url]);

    return (
        <div>
            <Slider/>
            <Product />
        </div>
    );
}

export default Home;
