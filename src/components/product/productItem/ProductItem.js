import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsItemContainer } from './ProductsItemContainer';

const ProductItem = ({product}) => {
    const {id, desc,imageUrl,name,price} = product;
 

    const shortenText = (text, n)=>{
        return text.length > n ? `${text.substring(0,n)}...` : text ;
    }

    return (

        <ProductsItemContainer key={id} className={'grid-item'} >
            <div className='image'>
            <Link to={`/product-details`} >
            <div className='img'>  
                 <img src={imageUrl} alt={name}/>
            </div>
            </Link>
            
            </div>
            <div className="content-item" >
                <div className='details'>
                    <h3>{shortenText(name , 150)}</h3>
                    <p>${price}</p>
                    
                </div>
                
            <div className='item-action'>
                <button>
                   <span> Agregar Al Carro</span>
                </button>
            </div>

            

            </div>
            
        </ProductsItemContainer>

      

    );
}

export default ProductItem;
