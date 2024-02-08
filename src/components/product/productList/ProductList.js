import React, { useEffect, useState } from 'react';
import { ProductListContainer } from './ProductListContainer';
import { BsGrid3X3GapFill } from "react-icons/bs";
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SEARCH, SORT_PRODUCTS } from '../../../redux/slice/filterSlice';

const ProductList = ({products}) => {
    
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('Newest');

    const dispatch = useDispatch();
    const {filteredProducts} = useSelector((state)=>state.filter);
    

    useEffect(() => {
        dispatch(FILTER_BY_SEARCH({products, search}))
    }, [dispatch, products, search]);

    useEffect(() => {
        dispatch(SORT_PRODUCTS({products ,sort}))
    }, [dispatch, products, sort]);



    return (
        <ProductListContainer id='product'>
            <div className='top' >
                <div className='icons'>
                    <BsGrid3X3GapFill 
                        size={22} 
                        color='black'    
                    />
                    <p>
                        <b>{filteredProducts.length}</b> Productos encontrados
                    </p>

                </div>

                <div>
                    <Search value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
                
                {/* Sort products */}
                <div className='sort'>
                   <label>Ordenar por:</label>
                   <select value={sort} onChange={(e)=>setSort(e.target.value)}>
                        <option value='Newest'>El más nuevo
                        </option>
                        <option value='High-Low'>Precio: alto-bajo
                        </option>
                        <option value='Low-High'>Precio: Bajo-Alto
                        </option>
                        <option value='A-Z'> A-Z
                        </option>
                        <option value='Z-A'>Z-A
                        </option>
                   </select>

                </div>
            </div>

            <div className={'grid'}>
                 {
                    filteredProducts.length === 0 
                    ?(
                        <h3>Ningun producto encontrado</h3>
                     )
                    :(
                        <>
                            {
                                filteredProducts.map((product)=>(
                                    <div key={product.id} className={'gcol'}>
                                        <ProductItem product={product} />
                                    </div>
                                ))
                            }
                        </>
                    )
                 }
            </div>

        </ProductListContainer>
    );
}

export default ProductList;
