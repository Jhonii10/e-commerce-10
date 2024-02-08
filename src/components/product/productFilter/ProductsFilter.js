import React from 'react';
import styled from 'styled-components';


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

const ProductsFilter = () => {
    return (
        <ProductsFilterContainer>
            <h2>Categorias</h2>
            <div className='category'>
                <button className=''>Todas</button>
            </div>
            <h4>Marca</h4>
            <div className='brand'>
                <select name='brand'>
                    <option value="all">Todas</option>
                </select>
            </div>
            <h4>Precio</h4>
            <p>1500</p>
            <div className='price'>
                <input type='range' name='price' min={100} max={1000}/>
            </div>
            <br/>
            <button className='btn'>
                <span> Limpiar Filtros </span>
            </button>


        </ProductsFilterContainer>
    );
}

export default ProductsFilter;
