import React, { useEffect, useState } from 'react';
import { ProductosContainer } from './ProductosContainer';
import ProductsFilter from './productFilter/ProductsFilter';
import ProductList from './productList/ProductList';
import { UseFetchCollection } from '../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRICE_RANGE, STORE_PRODUCTS } from '../../redux/slice/productSlice';
import Loading from '../loader/Loading';
import { MdOutlineFilterList } from "react-icons/md";
import { MdOutlineFilterListOff } from "react-icons/md";

const Product = () => {

    const {isLoading,data} = UseFetchCollection('products') 
    const {products} = useSelector((state)=>state.product)

    const [showFilter, setShowFilter] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(STORE_PRODUCTS({products: data}));
        dispatch(GET_PRICE_RANGE({products: data}));
    }, [data, dispatch]);

    return (
        
        <ProductosContainer>
            <div  className={`container product`}>
             <aside className={showFilter ?'filter show':'filter'}>
                 <ProductsFilter/>
             </aside>
             <div className='content'>
             {
                
                isLoading ? <Loading/> : <ProductList products={products}/> 
             }
             <div 
                className='icon'
                onClick={()=>setShowFilter(!showFilter)}
                >
                <p>
                    Filtros
                    <b></b>
                </p>
                {
                    !showFilter ?  <MdOutlineFilterList size={22}/> : <MdOutlineFilterListOff size={22}/>
                }
                
             </div>

                
             </div>
            </div>
        </ProductosContainer>
    );
}

export default Product;
