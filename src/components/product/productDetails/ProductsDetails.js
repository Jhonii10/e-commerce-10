import React, {  useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../../loader/Loading';
import { useDispatch } from 'react-redux';
import { ADD_MULTIPLE_CART, CALCULATE_TOTAL_QUANTITY } from '../../../redux/slice/cartSlice';
import { UseFetchDocument } from '../../../hooks/useFetchDocument';


 const ProductDetailsContainer = styled.section`
    
    .container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .product {
        
    .card {
        padding: 1rem;
        margin-top: 1rem;
    }
    .review {
        border-top: 1px solid #ccc;
    }
    
    .details {

        
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;

        .row{
             
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
    }
        
        .img {
            display: flex;
           align-items: center;
        
        flex: 0 0 41.66666667%;
        max-width: 41.66666667%;
        
        img {
            width: 100%;
            border: 1px solid #ccc;
        border-radius: 10px;

        }
        }

        .content {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            flex: 0 0 58.33333333%;
            max-width: 58.33333333%;
        & > * {
            margin-bottom: 1rem;
        }

        h3{
            font-size: 26px;
            letter-spacing: -0.5px;
            line-height: 110%;
            font-weight: 700;
            margin-bottom: 12px;
        }
        .price {
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
            color: #c00;
             }
        }

        .count {
            text-align: center;
            padding: 1rem 0 0.5rem  0;
            & > * {
            margin-right: 1rem;
            }

            .title-option {
                font-weight: 700;
                color: #336699;
                margin-bottom: 5px;
            }

            .qty-square-buttons {
                padding: 0;
                display: flex;
                justify-content: center;
            }

            .quantity-square {
                height: 46px;
                border: 1px solid #ddd;
                text-align: center;
                color: #666;
                background: #f9f9f9;
                cursor: pointer;
                line-height: 48px;
                opacity: 1;
            }

            .minus-square {
                padding: 0 15px 0 16px;
                border-radius: 4px 0 0 4px;
            }

            .qty-input {
                padding: 0 10px;
                display: flex;
                align-items: center;
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                background: #fff;
            }

            .qty-field {
                width: 30px;
                height: 44px;
                line-height: 42px;
                font-size: 18px !important;
                color: #249d3d;
                font-weight: bold;
                justify-content: center;
                margin: 0;
                border: 0;
                padding: 1px 0 0 0;
                text-align: center;
            }

            .plus-square {
                padding: 0 16px 0 15px;
                border-radius: 0 4px 4px 0;
            }
        }

        .button-add{
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
            width: 100%;
            cursor: pointer;

            span{
                display: block;
                font-family: 'Quicksand';
                padding: 15px 30px;
                font-size: 16px;
                min-width: 260px;
                font-weight: 600;
                height: 54px;
            }
    }
    }
    }
    

    @media screen and (max-width: 700px) {

            .container {
            max-width: 100%;
        }

        
    .product {
        .details {


        .img {
            width: 100%;
            flex: 0 0 100%;
                max-width: 100%;
        }

        .content {
            width: 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        }
    }
    }

    @media screen and (max-width: 991.98px){
        .container {
        max-width: 100%;
    }

    }

    @media screen and (min-width: 992px) {
        .container {
        max-width: 960px;
    }
    }
    @media screen and (min-width: 1114px) {
        .container {
        max-width:  1114px ;
    }
    }




`;

const ProductsDetails = () => {

    const {id} = useParams();
    // const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
   

    const navigate = useNavigate();
    const {document:product} = UseFetchDocument("products", id);

    const handleBack = ()=>{
        navigate('/#productos')
    }

    const handleQuantityChange = (e) => {
        let newValue = e.target.value === '' || e.target.value < 1 ? 1 : e.target.value;
        newValue = Math.min(newValue, 10); 
        setQuantity(newValue);
    };

    const incrementQuantity = ()=>{
        setQuantity((quantity)=>quantity+1)
    }

    const decrementQuantity = ()=>{
        setQuantity((quantity)=>quantity-1)
    }

    const addToCart = ()=>{
        dispatch(ADD_MULTIPLE_CART({ ...product, cartQuantity: quantity }))
        dispatch(CALCULATE_TOTAL_QUANTITY())
        navigate('/cart')
    }


    return (
        <ProductDetailsContainer>
            <div className='container product'>
                <h2>Detalles Del Producto</h2>
                <div>
                <div onClick={handleBack} style={{marginBottom:'1rem', cursor:'pointer'}}>
                    &larr; Regresar
                </div>
                </div>
                {
                    product === null 
                    ? (<Loading/>)
                    :(
                        <>
                            <div className='details'>
                                <div className='row'>
                                <div className='img'>
                                    <img src={product.imageUrl} alt={product.name} />
                                    
                                </div>

                                <div className='content'>
                                    <h3>{product.name}</h3>
                                    
                                    <p>{product.desc}</p>
                                    <p className='price'>${product.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    <p>
                                        <b>SKU:</b>
                                        {product.id}
                                    </p>
                                    <p>
                                        <b>Categoria:</b>
                                        {product.brand}
                                    </p>
                                    <div className='count'>
                                         <label className="title-option" for="Cantidad">Cantidad</label>
                                         <div class="qty-block">
                                        <div class="qty-square-buttons">
                                            <button 
                                                name="button" 
                                                type="button" 
                                                class="quantity-square minus-square" 
                                                data-type="minus" 
                                                onClick={decrementQuantity}
                                                disabled={quantity <= 1 && true}
                                            >-</button>
                                            <div class="qty-input">
                                            <input 
                                                type="number" 
                                                name="quantity" 
                                                value={quantity}
                                                onChange={(e)=>setQuantity(e.target.value)}
                                                onBlur={(e) => handleQuantityChange(e)}
                                                className="qty-field" 
                                                autocomplete="off" 
                                                min="1" 
                                                max="999" 
                                                data-min="1" 
                                                data-max="1" 
                                                data-default="1"

                                            />
                                            </div>
                                            <button 
                                                name="button" 
                                                type="button" 
                                                class="quantity-square plus-square" 
                                                data-type="plus" 
                                                onClick={incrementQuantity}
                                                disabled={quantity >= 10 && true}
                                            >+</button>
                                        </div>
                                        </div>
                                    </div>
                                    <button className='button-add' onClick={addToCart}>
                                        <span>  AGREGAR AL CARRITO</span>
                                    </button>
                                </div>
                                </div>

                            </div>
                        </>
                     )
                }
            </div>
        </ProductDetailsContainer>
    );
}

export default ProductsDetails;
