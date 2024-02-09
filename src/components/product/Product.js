import React, { useEffect } from 'react';
import { ProductosContainer } from './ProductosContainer';
import ProductsFilter from './productFilter/ProductsFilter';
import ProductList from './productList/ProductList';
import { UseFetchCollection } from '../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRICE_RANGE, STORE_PRODUCTS } from '../../redux/slice/productSlice';
import Loading from '../loader/Loading';

const Product = () => {

    const {isLoading,data} = UseFetchCollection('products')
    
    const {products , minPrice} = useSelector((state)=>state.product)
    console.log(products , minPrice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(STORE_PRODUCTS({products: data}));
        dispatch(GET_PRICE_RANGE({products: data}));
    }, [data, dispatch]);

    return (
        
        <ProductosContainer>
            <div  className={`container product`}>
             <aside className='filter'>
                 <ProductsFilter/>
             </aside>
             <div className='content'>
             {
                
                isLoading ? <Loading/> : <ProductList products={products}/> 
             } 
                
             </div>
            </div>
        </ProductosContainer>
    );
}

export default Product;
