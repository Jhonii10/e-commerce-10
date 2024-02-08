import React, { useEffect } from 'react';
import { ProductosContainer } from './ProductosContainer';
import ProductsFilter from './productFilter/ProductsFilter';
import ProductList from './productList/ProductList';
import { UseFetchCollection } from '../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_PRODUCTS } from '../../redux/slice/productSlice';
import Loading from '../loader/Loading';

const Product = () => {

    const {isLoading,data} = UseFetchCollection('products')
    
    const {products} = useSelector((state)=>state.product)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(STORE_PRODUCTS({products: data}))
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
