import React, { useState } from 'react';
import { ProductListContainer } from './ProductListContainer';
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Search from '../../search/Search';
import ProductItem from '../productItem/ProductItem';

const ProductList = ({products}) => {
    
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <ProductListContainer id='product'>
            <div className='top' >
                <div className='icons'>
                    <IoGrid 
                        size={22} 
                        color='red'
                        onClick={()=>setGrid(true)}    
                    />
                    <FaThList
                        size={22} 
                        color='black'
                        onClick={()=>setGrid(false)}    
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

            <div className={grid ?'grid':'list'}>
                 {
                    products.leght === 0 
                    ?(
                        <h3>Productos No encontrados</h3>
                     )
                    :(
                        <>
                            {
                                products.map((product)=>(
                                    <div key={product.id} className={grid ?'gcol':''}>
                                        <ProductItem product={product} grid={grid}/>
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
