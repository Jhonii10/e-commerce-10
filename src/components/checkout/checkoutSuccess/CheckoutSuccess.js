import React from 'react';
import styled from 'styled-components';
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
    const navigate = useNavigate();
    return (
        <CheckoutSuccessContainer>
          <div className='container'>
            <div className='row'>
            <CiCircleCheck size={70}  color="green"/>
            <h1>¡Pago exitoso!</h1>
            <p>Muchas gracias por su compra</p>
            <button 
                className='btn'
                onClick={()=>navigate('/#productos')}
                >
                    <IoIosArrowBack size={30}/>
                    Regresar a a la Tienda
                </button>
            </div>

                
          </div>

        </CheckoutSuccessContainer>
    );
}

export default CheckoutSuccess;


const CheckoutSuccessContainer = styled.div`

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        padding-bottom: 24px;
        padding-top: 24px;
    }

    .row{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .btn {
                margin-top: 5px;
                display: inline-block;
                border: 0;
                border-radius: 10px ;
                color: #fff;
                background-color: #8e0808;
                cursor: pointer;
                padding: 13px 22px;
                font-size: 17px;
                letter-spacing: 0.5px;
                font-weight: 700;
                font-family: 'Quicksand';
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    margin-right: 5px;
                }     
        }
   

`;
