import React, { useEffect } from 'react';
import { OrderContainer } from './OrdersContainer';
import { useNavigate } from 'react-router-dom';

import { UseFetchCollection } from '../../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_ORDERS } from '../../../redux/slice/orderSlice';
import Loader from '../../loader/Loader';
import { UseFormatAmount } from '../../../hooks/useFormatAmount';
import { UseChangeOrdersStatus } from '../../../hooks/useChangeOrdersStatus';

const Orders = () => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data ,  isLoading } = UseFetchCollection('orders');
    const orders = useSelector((state)=>state.orders.orderHistory);
    const {formatAmount} = UseFormatAmount();
  

    const handleClik = (id) => {
        return navigate(`/admin/order-details/${id}`); 
    }

    useEffect(() => {
        dispatch(STORE_ORDERS(data))
    }, [data, dispatch]);

    return (
        <OrderContainer>
            <div className='container'> 
                <h2>Todos los pedidos</h2>
                <p>Abre un pedido para <b>cambiar el estado del pedido.</b></p>
                <br/>
                <>
                    {
                        isLoading && <Loader/>  
                    }
                    <div className='table'>
                      {
                        orders.length === 0 
                        ? (
                            <p>No hay Pedidos</p>
                          )
                        :(
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Fecha</th>
                                        <th>ID</th>
                                        <th>Precio</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, i) =>{
                                            const {id, orderDate , orderTime, orderAmount , orderStatus }= order;
                                            const {orderStatus:status} = UseChangeOrdersStatus(orderStatus);
                                            return(
                                                <tr key={i} onClick={()=>handleClik(id)}>
                                                   <td><b>{i+1}</b></td>
                                                   <td>{orderDate} {orderTime}</td>
                                                   <td>{id}</td>
                                                   <td>$ {formatAmount(orderAmount)}</td>
                                                   <td>
                                                        <span
                                                            className={`badge ${status}`}
                                                            >
                                                            {orderStatus}
                                                        </span>
                                                   </td>
                                                   

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                      }
                    </div>
                </>

            </div>
            
        </OrderContainer>
        
    );
}

export default Orders;
