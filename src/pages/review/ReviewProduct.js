import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UseFetchDocument } from '../../hooks/useFetchDocument';
import { Loading } from '../../components';
import StarsRating from 'react-star-rate';

const ReviewProduct = () => {
    
    const [rate, setRate] = useState(0);
    const [review, setReview] = useState('');
    
    const {id} = useParams();

    const {document:product} = UseFetchDocument("products", id);
    console.log(product);


    const {userID, userName} = useSelector((state)=>state.auth)

    const submitReview = (event)=>{
        event.preventDefault();
    }
   

    return ( 
        <ReviewProductContainer>
            <div className='container'>
                <h2>Califica este producto</h2>
                <div className='review row'>
                
                {
                    product === null 
                    ?(
                       <Loading/> 
                     )
                    :( 
                        <>
                        <div className='col col-1 '>
                        <div className='cart-list-container'>
                        <p>
                            <b>{product.name}</b> 
                        </p>
                        
                        <img src={product.imageUrl} alt={product.name} />
                        </div>
                        </div>
                        <div className='col col-2'>
                        <div
                            className='cart-list-container'
                         >
                            <form
                             onSubmit={(e)=>submitReview(e)}
                            >
                            <label>Calificacion</label>
                            <StarsRating
                            value={rate}
                            
                            onChange={value => {
                            setRate(value);
                            }}
                            />
                            <label className='review'>¿Qué te gustaría decir acerca de este producto?</label>
                            <textarea 
                                value={review}
                                required
                                onChange={(e)=>setReview(e.target.value)}
                                cols={30}
                                rows={10}
                                placeholder='Escribe aquí tu experiencia con este producto.'
                            />
                            <button type="submit">
                               <span>Enviar reseña</span>
                            </button>

                            </form>

                        </div>
                        </div>
                        </>
                    )
                }
                </div>
            </div>
        </ReviewProductContainer>
    );
}

export default ReviewProduct;



const ReviewProductContainer = styled.section`

    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
        padding-bottom: 24px;
        padding-top: 24px
    }

    img{
        max-width:100%;
    }

    .row {

    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;

    .col{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    }

    .col-1{
    flex: 0 0 50%;
    max-width: 50%;

    }

    .col-2{
    flex: 0 0 50%;
    max-width: 50%;

    }

    }

    .cart-list-container{
        padding: 40px 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .review {
    .card {
        width: 100%;
        max-width: 500px;
        padding: 1rem;
    }
    form {
        label {
        display: block;
        font-size: 1.4rem;
        font-weight: 500;
        }
        .review{
            font-size: 1rem;
            margin-top:6px;
        }
        input[type="text"],
        input[type="number"],
        input[type="file"],
        input[type="email"],
        select,
        textarea,
        input[type="password"] {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        padding: 1rem;
        margin: 1rem auto;
        width: 100%;
        border: 1px solid #777;
        border-radius: 3px;
        outline: none;
        font-family: "Quicksand", sans-serif;
        }
    }
    }


    button {
        margin-top: 5px;
            display: inline-block;
            border: 0;
            border-radius: 5px ;
            padding: 0 ;
            color: #fff;
            background-color: #8e0808;
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

    
    @media screen and (max-width: 999px) {

    .row{
    .col-1{
    flex: 0 0 100%;
    max-width: 100%;
    }

    .col-2{
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 12px;

    }
    }}

`;
