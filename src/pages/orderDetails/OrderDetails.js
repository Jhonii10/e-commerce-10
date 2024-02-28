import React, { useEffect } from 'react';
import { OrderDetailsContainer } from './OrderDetailsContainer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { UseFetchDocument } from '../../hooks/useFetchDocument';
import { Loading } from '../../components';

const OrderDetails = () => {
    const {id} = useParams();
    const [order, setOrder] = useState(null);
    const {document} = UseFetchDocument('orders', id)
    const navigate = useNavigate();

    const formatAmount = (amount) => {
        return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
    
    useEffect(() => {
        setOrder(document)
    }, [document]);

    


    return (
        <OrderDetailsContainer>
            <div className='container'>
                <h2>Datos del pedido</h2>
                <Link to={'/order-history'} style={{marginBottom:'1rem', cursor:'pointer'}}>
                    &larr; Volver a mis pedidos
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
                               <b>Estado del pedido:</b> {order.orderStatus} 
                            </p>


                            <table>
                                <thead>
                                    <tr>
                                    <th colSpan={6} >
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
                                    <th >Reseña</th>
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
                                                    <td>
                                                        <span 
                                                            className='review'
                                                            onClick={()=>navigate(`/review-products/${item.id}`)}
                                                        >calificar</span>
                                                    </td>
                                                    <td >${formatAmount(item.price * item.cartQuantity)}</td>
                                                    </tr>

                                            )
                                        })
                                        
                                    }
                                    <tr>
                                    <td  colSpan={5}>
                                        Subtotal
                                    </td>
                                    <td >${formatAmount(order.orderAmount)}</td>
                                    </tr>
                                    
                                    <tr>
                                    <td  colSpan={5}>
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

            </div>
            
        </OrderDetailsContainer>
    );
}

export default OrderDetails;
