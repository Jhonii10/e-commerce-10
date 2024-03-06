import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Loader from '../../loader/Loader';

const ChangeOrderStatus = () => {
    const [status, setStatus] = useState('');
    const [Loading, setLoading] = useState(false);

    const handleUpdated = (e) => {
        setLoading(true)
        e.preventDefault();
        setLoading(false);
    }

    return (
        <>
             {Loading && <Loader/>}
            <ChangeOrderStatusContainer className='status'>
                <div className='card'>
                    <h4>Actualizar estado</h4>
                    <form onSubmit={handleUpdated} >
                        <span>
                            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                                <option value='' disabled >Elije uno</option>
                                <option value={'Procesando'}>Procesando</option>
                                <option value={'Enviado'}>Enviado</option>
                                <option value={'Entregado'}>Entregado</option>
                            </select>

                        </span>
                        <button>
                            <span>
                                Actualizar 
                            </span>
                        </button>

                    </form>
                </div>
            </ChangeOrderStatusContainer> 
        </>
         
    );
}

export default ChangeOrderStatus;

const ChangeOrderStatusContainer = styled.div`

    &.status {
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
    .card {
        border: 1px solid #ccc;   
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        h4{
            margin:0;
        }
    }

    form {
        select {
        display: inline-block;
        font-size: 1rem;
        font-weight: 300;
        padding: 0.875rem;
        margin: 1rem auto;
        width: 100%;
        border: 1px solid #777;
        border-radius: 3px;
        outline: none;
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
            width: 100%;
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

    }

`;