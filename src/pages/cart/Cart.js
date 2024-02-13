import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { CartContainer } from './CartContainer';


const Cart = () => {

    const {cartItems , cartTotalAmount, cartTotalQuantity} = useSelector((state)=>state.cart)
    console.table({cartItems , cartTotalAmount, cartTotalQuantity})
    return (
        <CartContainer>
            <div className='container table'>
                <h2>Tu Lista De Compras</h2>
                {
                    cartItems.lenght === 0
                    ? <>
                        <p>No hay productos en el carrito.</p>
                        <br/>
                        <div>
                            <Link to={'/#products'}>
                                &larr; Continuar Comprando
                            </Link>
                        </div>
                      </>
                    : <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Opciones</th>

                                </tr>
                            </thead>
                            <tbody>
                            {
                                cartItems.map((cart, index)=>{
                                    const {id , name , price, imageUrl, cartQuantity} = cart;

                                    return (
                                        
                                            <tr key={id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <p>
                                                        <b>{name}</b>
                                                    </p>
                                                    <img src={imageUrl} alt={name} style={{ width: "100px" }}/>
                                                </td>
                                                <td>${price}</td>
                                                <td>
                                                    <div className='count'>
                                                        <button>-</button>
                                                        <p>
                                                            <b>{cartQuantity}</b>
                                                        </p>
                                                        <button>+</button>
                                                    </div>
                                                </td>
                                                <td>${(cartQuantity * price)}</td>
                                                <td>
                                                    <MdDelete size={22} color='red'/>
                                                </td>
                                            </tr>
                                        
                                    )
                                }) 
                            }
                                    
                            </tbody>
                        </table>
                      </>
                }
            </div>
        </CartContainer>)
}

export default Cart;
