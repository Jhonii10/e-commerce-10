import React, { useState } from 'react';
import { ProductListContainer } from './ProductListContainer';
import { BsGrid3X3GapFill } from "react-icons/bs";
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';

const ProductList = ({products}) => {
    
    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <ProductListContainer id='product'>
            <div className='top' >
                <div className='icons'>
                    <BsGrid3X3GapFill 
                        size={22} 
                        color='black'    
                    />
                    <p>
                        <b>10</b> Productos encontrados
                    </p>

                </div>

                <div>
                    <Search value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
                
                {/* Sort products */}
                <div className='sort'>
                   <label>Ordenar por:</label>
                   <select >
                        <option value='Newest'>El más nuevo
                        </option>
                        <option value='lowet-price'>Precio: alto-bajo
                        </option>
                        <option value='highet-price'>Precio: Bajo-Alto
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
                    products.leght === 0 
                    ?(
                        <h3>Productos No encontrados</h3>
                     )
                    :(
                        <>
                            {
                                products.map((product)=>(
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
