import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsItemContainer } from './ProductsItemContainer';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../../redux/slice/cartSlice';

const ProductItem = ({product}) => {
    const {id,imageUrl,name,price} = product;
    const dispatch = useDispatch();

    const shortenText = (text, n)=>{
        return text.length > n ? `${text.substring(0,n)}...` : text ;
    }


    const addToCart = ()=>{
        dispatch(ADD_TO_CART(product))
    }

    return (

        <ProductsItemContainer key={id} className={'grid-item'} >
            <div className='image'>
            <Link to={`/product-details/${id}`} >
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
                <button onClick={()=>addToCart()}>
                   <span> Agregar Al Carro</span>
                </button>
            </div>

            

            </div>
            
        </ProductsItemContainer>

      

    );
}

export default ProductItem;
