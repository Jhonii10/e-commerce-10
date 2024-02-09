import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../../redux/slice/filterSlice';


const ProductsFilter = () => {

   const dispatch = useDispatch();
   const {products , minPrice , maxPrice} = useSelector(state => state.product);
   const [category, setCategory] = useState('Todas');
   const [brand, setBrand] = useState('Todas');
   const [price, setPrice] = useState( 0);

   const allCategory = [
    'Todas',
    ...new Set(products.map((product)=>product.category))
   ]

   const allBrand = [
    'Todas',
    ...new Set(products.map((product)=>product.brand))
   ]

   useEffect(() => {
        dispatch(FILTER_BY_BRAND({products , brand}))
   }, [dispatch, brand, products]);

   
   
   const filterProducts = (cat)=>{
        setCategory(cat)
        dispatch(FILTER_BY_CATEGORY({products , category: cat}))
   }

   useEffect(() => {
        dispatch(FILTER_BY_PRICE({products, price}))
   }, [dispatch, price, products]);



   const clearFilters = ()=>{
      setCategory("Todas");
      setBrand("Todas");
      setPrice(minPrice || 0);
   }

    return (
        <ProductsFilterContainer>
            <h2>Categorias</h2>
            <div className='category'>
                {
                    allCategory.map((cat, index) => (
                        <button
                        key={index}
                        type="button"
                        className={category === cat ? 'active' : null}
                        onClick={()=>filterProducts(cat)}
                        >
                        {cat}
                        </button>
                    ))
                }
                
            </div>
            <h4>Marca</h4>
            <div className='brand'>
                <select value={brand} onChange={(event)=>setBrand(event.target.value)}>
                    {
                        allBrand.map((brand , index)=>(
                            <>
                                <option key={`${index}-filter`} value={brand}>{brand}</option>
                            </>
                        ))
                    }
                </select>
            </div>
            <h4>Precio</h4>
            <p>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <div className='price'>
                <input 
                    type='range' 
                    name='price' 
                    min={minPrice} 
                    max={maxPrice}
                    value={price}
                    onChange= {e => setPrice(e.target.value)}
                />
            </div>
            <br/>
            <button className='btn' 
                onClick={clearFilters}
            >
                <span> Limpiar Filtros </span>
            </button>


        </ProductsFilterContainer>
    );
}

export default ProductsFilter;


const ProductsFilterContainer = styled.div`

  h4 {
    margin-top: 1rem;
  }
  .category button {
    display: block;
    text-align: left;
    width: 80%;
    height: 3rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #777;
  }

  .brand {
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;

      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
    }
  }


.active {
  position: relative;
  padding-left: 1rem;
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background-color: black;
}

.btn {
    display: inline-block;
    border: 0;
    border-radius: 5px ;
    padding: 0 ;
    color: #fff;
    background-color: #8e0808;
    width: 154px;
    cursor: pointer;

    span{
    padding: 10px 30px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Quicksand';
    display: block;
    border-radius: 5px !important;
    padding: 10px 15px;
    color: #fff;
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    }
}

@media screen and (max-width: 700px) {

    .btn{
        width: 100%;
    }
  
    .category button {
      width: 100%;
    }
    .brand {
      select {
        width: 100%;
      }
    }

}

`;
