import React, { useEffect } from 'react';
import { OrderHistoryContainer } from './OrderHistoryContainer';
import { UseFetchCollection } from '../../hooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_ORDERS } from '../../redux/slice/orderSlice';
import { Loader } from '../../components';
import { useNavigate } from 'react-router-dom';


const OrderHistory = () => {

    const {data ,  isLoading } = UseFetchCollection('orders');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orders = useSelector((state)=>state.orders.orderHistory);
    const userID = useSelector((state)=>state.auth.userID);

    const formatAmount = (amount) => {
        return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };


    const handleClik = (id) => {
        return navigate('/order-Detail/') 
    }

    const filteredOrders = orders.filter((order) => order.userID === userID);


    useEffect(() => {
        dispatch(STORE_ORDERS(data))
    }, [data, dispatch]);



    return (
        
        <OrderHistoryContainer>
            <div className='container'> 
                <h2>Mis pedidos</h2>
                <p>Abrir un pedido para dejar una <b>Reseña</b></p>
                <br/>
                <>
                    {
                        isLoading && <Loader/>  
                    }
                    <div className='table'>
                      {
                        filteredOrders.length === 0 
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
                                        filteredOrders.map((order, i) =>{
                                            const {id, orderDate , orderTime, orderAmount , orderStatus }= order;
                                            return(
                                                <tr key={i} onClick={()=>handleClik(id)}>
                                                   <td>{i+1}</td>
                                                   <td>{orderDate} {orderTime}</td>
                                                   <td>{id}</td>
                                                   <td>$ {formatAmount(orderAmount)}</td>
                                                   <td>
                                                        <span
                                                            className={`badge ${orderStatus !== 'Entregado'
                                                            ? ' pending':' delivered' }`}
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
            
        </OrderHistoryContainer>
        
    );
}

export default OrderHistory;
