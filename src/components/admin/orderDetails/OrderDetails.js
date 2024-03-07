import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UseFetchDocument } from '../../../hooks/useFetchDocument';
import { OrderDetailsContainer } from './OrderDetailsContainer';
import Loading from '../../loader/Loading';
import { UseFormatAmount } from '../../../hooks/useFormatAmount';
import ChangeOrderStatus from '../orderStatus/ChangeOrderStatus';
import { UseChangeOrdersStatus } from '../../../hooks/useChangeOrdersStatus';


const OrderDetails = () => {

    const {id} = useParams();
    const [order, setOrder] = useState(null);
    const {document} = UseFetchDocument('orders', id)
    const {formatAmount}=UseFormatAmount();
    const {orderStatus} = UseChangeOrdersStatus(order?.orderStatus);

    
    useEffect(() => {
        setOrder(document)
    }, [document]);

    return (
        <OrderDetailsContainer>
            <div className='container'>
                <h2>Datos del pedido</h2>
                <Link to={'/admin/orders'} style={{marginBottom:'1rem', cursor:'pointer'}}>
                    &larr; Volver a Todos los pedidos
                </Link>
                <div className='table'>
                {
                    order === null 
                    ?(
                       <Loading/> 
                     )
                    :(
                        <>
                            <p>
                               <b>ID del pedido:</b> {order.id} 
                            </p>
                            <p>
                               <b>Valor del pedido: </b>$ {formatAmount(order.orderAmount)} 
                            </p>
                            <p>
                               <b>Estado del pedido:</b>{" "} 
                               <span
                                    className={`badge ${orderStatus}`}
                                    >
                                    {order.orderStatus}
                                </span>
                            </p>
                            <p>
                               <b>Comprador:</b> {order?.userName} 
                            </p>
                            <p>
                               <b>Telefono:</b> {order.shippingDate?.phoneNumber} 
                            </p>
                            

                            <table>
                                <thead>
                                    <tr>
                                    <th colSpan={5} >
                                        {" "}
                                        Productos del pedido{" "}
                                    </th>
                                    </tr>
                                    <tr>
                                    <th colSpan={2} >
                                        Producto
                                    </th>
                                    <th >Precio</th>
                                    <th >Cant.</th>
                                    <th >Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        order.cartItems?.map((item , index)=>{
                                            return (
                                                <tr key={index} >
                                                    <td >
                                                        <div className="img-wrap">
                                                        <a
                                                            title={item.desc}
                                                            href={`/product-details/${item.id}`}
                                                        >
                                                            <img
                                                            alt={item.name}
                                                            src={item.imageUrl}
                                                            width={70}
                                                            />
                                                        </a>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        <div style={{fontWeight:500}}>{item.name}</div>
                                                    </td>
                                                    <td >${formatAmount(item.price)}</td>
                                                    <td >
                                                        <span>{item.cartQuantity}</span>
                                                    </td>
                                                    
                                                    <td >${formatAmount(item.price * item.cartQuantity)}</td>
                                                    </tr>

                                            )
                                        })
                                        
                                    }
                                    <tr>
                                    <td  colSpan={4}>
                                        Subtotal
                                    </td>
                                    <td >${formatAmount(order.orderAmount)}</td>
                                    </tr>
                                    
                                    <tr>
                                    <td  colSpan={4}>
                                        Total
                                    </td>
                                    <td >
                                        <strong>${formatAmount(order.orderAmount)}</strong>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                        </>
                    )
                }

                </div>

                <ChangeOrderStatus order={order} id={id}/>

            </div>
            
            
            
        </OrderDetailsContainer>
    );
}

export default OrderDetails;
