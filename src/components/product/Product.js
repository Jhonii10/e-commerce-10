import React from 'react';
import { ProductosContainer } from './ProductosContainer';
import ProductsFilter from './productFilter/ProductsFilter';
import ProductList from './productList/ProductList';

const Product = () => {
    return (
        <ProductosContainer>
            <div className={`container product`}>
             <aside className='filter'>
                 <ProductsFilter/>
             </aside>
             <div className='content'>
                <ProductList/>
             </div>
            </div>
        </ProductosContainer>
    );
}

export default Product;
